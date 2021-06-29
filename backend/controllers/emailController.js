import Hello from "./hello_template.js";
import mailer from "nodemailer";
import google from 'googleapis'


const CLIENT_ID =  process.env.CLIENT_ID
const CLEINT_SECRET =  process.env.CLEINT_SECRET,
const REDIRECT_URI =  process.env.REDIRECT_URI
const REFRESH_TOKEN =  process.env.REFRESH_TOKEN

const oAuth2Client =   new google.auth.OAuth2(
CLIENT_ID,
CLEINT_SECRET,
REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const getEmailData = (to, name, template) => {
  let data = null;
  const userloged = localStorage.getItem("email");
  console.log("userloged: ", userloged);

  console.log("to: ", to);
  console.log("name: ", name);
  data = {
    from: "Abdullah Naveed<abdullah.naveed@gigalabs.co>",
    to,
    subject: `Daily Ticket Update`,
    html: Hello(),
  };
  console.log("data: ", data);
  return data;
};

const sendEmail = async(to, name, type) => {
  const accessToken = await oAuth2Client.getAccessToken();
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: "abdullah.naveed@gigalabs.co",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLEINT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
  console.log("name: ", name);
  const mail = getEmailData(to, name, type);
  console.log("mail: ", mail);
  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log("error: ", error);
      console.log(error);
    } else {
      console.log("email send successfully");
    }
    smtpTransport.close();
  });
};

export { sendEmail };
