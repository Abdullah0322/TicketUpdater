import Hello  from "./hello_template.js";
import mailer from 'nodemailer'

const getEmailData = (to, name, template) => {
  let data = null;
  const userloged=localStorage.getItem("email")
  console.log('userloged: ', userloged);

  console.log('to: ', to);
  console.log('name: ', name);
      data = {
          from: "Abdullah Naveed<abdullahnaveed71.am@gmail.com>",
          to,
          subject: `Daily Ticket Update`,
          html: Hello(),
          
        }
        console.log('data: ', data);
  return data;
  
};

const sendEmail = (to, name, type) => {
    
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "abdullahnaveed71.am@gmail.com",
      pass: "malikdulli12",
    },
  });
  console.log('name: ', name);
  const mail = getEmailData(to, name, type);
  console.log('mail: ', mail);
  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
        console.log('error: ', error);
      console.log(error);
    } else {
      console.log("email send successfully");
    }
    smtpTransport.close();
  });
};

export{
    sendEmail
}