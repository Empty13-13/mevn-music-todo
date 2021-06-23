require('dotenv').config();
const jwt = require('jsonwebtoken')
const { User, rulLevel, Token } = require ('../model')
const bcrypt = require('bcryptjs');
const { body } = require('express-validator');

const generateAccessToken = (id, rulLevel, secret = process.env.JWT_SECRET, minut = "1h") => {
	const payload = {
			id,
			rulLevel
	}
	return jwt.sign(payload, secret, {expiresIn: minut} )
}

module.exports = {
	async login({body:{username, password}},res){
		try {
			const user = await User.findOne({username})

			if(!user){
				return res.status(401).send({message: `Пользователь ${username} не найден`})
			}
			const validPassword = bcrypt.compareSync(password, user.password)
			if (!validPassword) {
					return res.status(401).send({message: `Введен неверный пароль`})
			}
			const accessToken = generateAccessToken(user._id, user.rulLevel)
			const refreshToken = generateAccessToken(user._id, user.rulLevel,process.env.JWT_SECRET_REFRESH,"30d")


			const foundToken = await Token.findOne({
				user: user._id
			})

			if(foundToken){

				await Token.findByIdAndUpdate(foundToken._id, { token: refreshToken})
				return res.status(200).send({
					accessToken,
					refreshToken,
      	  username: user.username,
					rulLevel: user.rulLevel,
					id: user._id,
				})
			}

			const item = new Token({ token: refreshToken, user: user._id});
			await item.save();

			return res.status(200).send({
				accessToken,
				refreshToken,
        username: user.username,
				rulLevel: user.rulLevel,
				id: user._id,
			})
		} catch (error) {
			return res.status(401).send({
				message:"Извините, но логин или пароль не подходят!",
				error
			})
		}
	},
	async signUp ({body: {username, password}},res){
		try {
			const foundUser = await User.findOne({username})

			if(foundUser){
				return res.status(400).json({message: "Пользователь с таким именем уже существует"})
			}

			const hashPassword = bcrypt.hashSync(password, 7);
			const userRole = await rulLevel.findOne({value: "ADMIN"})
			const user = new User({username, password: hashPassword, rulLevel: [userRole.value]})
			await user.save()
			return res.json({message: "Пользователь успешно зарегистрирован"})

		} catch (error) {
			return res.status(403).send({
				message:"Извините, но логин или пароль не подходят!",
				error
			})
		}
	},
	async logout({ body: { refreshToken } }, res) {
    const foundToken = await Token.findOne({ token: refreshToken })

    if (!foundToken) {
      return res.status(403).send({
        message: 'Пользователь не авторизован'
      })
    }

    await Token.findByIdAndDelete(foundToken._id)

    return res.status(200).send({
      message: 'Юзер успешно разлогинен'
    })
  },
  async refreshToken({ body: { refreshToken } }, res) {
    // Проверяем есть ли токен в запросе на сервер
    if (!refreshToken) {
      return res.status(403).send({
        message: 'Действие запрещено'
      })
    }
    // ищем токен в бд
    const currentToken = await Token.findOne({ token: refreshToken })

    // если не находим токен то возвращаем ошибку
    if (!currentToken) {
      return res.status(403).send({
        message: 'Действие запрещено'
      })
    }

    jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH, (err, user) => {
      if (err) {
        return res.status(403).send({
          message: 'Действие запрещено'
        })
      }

      const accessToken = jwt.sign({
        userId: user._id,
        email: user.email,
      }, process.env.JWT_SECRET, {
        expiresIn: '1m'
      })

      return res.status(200).send({
        accessToken,
				id: user.id,
				rulLevel: user.rulLevel,
      })

    })
  },
	verifyAccessToken({body: { accessToken }},res){
		jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).send({
          message: 'Действие запрещено'
        })
      }
      return res.status(200).send({
        id: user.id
      })

    })
	}

}
