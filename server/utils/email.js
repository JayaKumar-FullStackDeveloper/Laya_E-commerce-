const nodemailer = require("nodemailer")
const sendEmailToUser = async(email,UserName)=>{
    const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user:"jkrkumar1801@gmail.com",
                pass:"rmtj uyqz ybyd kify"
        
            }
        });
    const mailOption = {
        from: "jkrkumar1801@gmail.com",
        to: email,
        subject: "Your Generated Password",
        text:`Hi ${UserName}. this is your Password ${password}`  
    }
    await transporter.sendMail(mailOption)
    console.log("email Sent Successfully");
}
module.exports = sendEmailToUser