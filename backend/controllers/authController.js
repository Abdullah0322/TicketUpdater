import { response } from "express";
import asyncHandler from "express-async-handler";
import { OAuth2Client } from "google-auth-library";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

const client = new OAuth2Client(
  "41827559099-qfdtqfghmce5qqgl1ausr07rpi0n4be2.apps.googleusercontent.com"
);
const googlelogin = asyncHandler(async (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "41827559099-qfdtqfghmce5qqgl1ausr07rpi0n4be2.apps.googleusercontent.com",
    })
    .then((response) => {
      const { email, name, email_verified } = response.payload;
      console.log(response.payload);

      if (email_verified) {


     User.findOne({email}).exec((err,user)=>{

      if(err){

        return res.status(400).json({


          error:"SOmething went wrong"
        })
      }
      else{

        if(user){
          const token= generateToken(user._id)
          const {_id,name,email}=user;
          res.json({token,user:{_id,name,email}})
        }
        else{
          let password=email+ process.env.JWT_SECRET;
          let newUser=new User({name,email,password});
          newUser.save((err,data)=>{
            if(err){

              return res.status(400).json({
      
      
                error:"SOmething went wrong"
              })  
            }
            const token= generateToken(data ._id)
            const {_id,name,email}= newUser;
            res.json({token,user:{_id,name,email}})
          })
        }
      }
     })
      }
    });
});

export { googlelogin };
