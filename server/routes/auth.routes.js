const Router = require ("express");
const User = require ("../models/User")
const bcrypt = require ("bcryptjs") 
const {check, validationResult} =  require ('express-validator')

const router = new Router()  //создаем объект

router.post('/reg', 
    [
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})
    ],    
    async (req, res) => {
    console.log("from POST" + req.body)
    //try{
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        }
        const {email, password} = req.body; // получим имэил и пароль из тела запроса
        const candidate = await User.findOne({email}) // проверим существует ли пользователь с таким имэил в базе

        if (candidate) {
            return res.status(400).json({message: `User with email ${email} already exist`})
        }
        const hashPassword = await bcrypt.hash(password, 15) // хєшируем пароль для безопасности
        const user = new User ({email, password: hashPassword})
        await user.save() //сохраним нового поьзователя в БД
        return res.json ({message: "User was created"})
        }); 
        
    // } catch (e) {
    //     console.log(e)
    //     res.send({message: "Server error"})
    // }
//})

//export default router;
module.exports = router
