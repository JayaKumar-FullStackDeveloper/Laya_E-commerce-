const userRegister = require("../models/authUserModel")
const generatepwd = require("../utils/passwordGenerator")
const emailService = require("../utils/email")
const registration = async(req,res)=>{
    try {
        const {email, ...restbody}=req.body
        const existingEmail = await userRegister.findOne({email})
        if (existingEmail) {
            return res.status(400).json({
                message: "Email Id Already Exist"
            })
        }
        let password = await generatepwd(8)
        let hashPassword = await bcrypt.hash(password,10)
        const data = {
            ...restbody,
            email,
            password: hashPassword
        }
        const createUser = await userRegister.create(data)
        await emailService(email, data.userName,password)
        console.log(createUser);
        res.json({
            data: createUser,
            message: "sucess"
        })
    } catch (error) {
        res.json({
            Error : error.message
        })
    }
}
module.exports ={
    registration, 

}