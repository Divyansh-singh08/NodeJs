
const nodemailer = require("nodemailer");

//
const sendMail = async (req,res)=>{

    let testAccount = await nodemailer.createTestAccount();

    //now we need to connect to the SMPT server
    
    let transport = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: 'price.west68@ethereal.email',// generated ethereal user
            pass: 'NHrAUxfG64rZXTupwb' // generated ethereal password
        },
    });

    let info = await transport.sendMail({
        from: '"Divyansh Singh 👻" <price.west68@ethereal.email>', // sender address
        to: "cu.001560@gmail.com", // list of receivers
        subject: " Hello ✔ how are you doing man in life ", // Subject line
        text: " Hello world ? ", // plain text body
        html: " <b>Hello cu?</b> ", // html body
    });
    //any msg id get it here
    console.log("Message sent: %s", info.messageId);
    res.json(info);
};

// now send the mail to default transporter 


module.exports = sendMail; 