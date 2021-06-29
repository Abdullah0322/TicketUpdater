import axios from "axios";
import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import '../components/ticket.css'
import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    minWidth: 275,
    minHeight: 275,
  },

  // title: {
  //   fontSize: 14,
  // },
  pos: {
    marginBottom: 12,
  },
}));

const Login = ({ location, history }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const responsesFail = (response) => {
    console.log(response);
  };
  const responsesSuccess = (response) => {
    console.log(response);
    console.log(response.profileObj.name);
    localStorage.setItem("email", JSON.stringify(response.profileObj.email));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // const { data } = axios.post(
    //   "/api/googlelogin",
    //   { tokenId: response.tokenId },
    //   config
    // ).then((response) => {
    //   localStorage.setItem("response", JSON.stringify(data));

    //     console.log(response);
    // });
    axios({
      method: "POST",
      url: `/api/googlelogin`,
      data: { tokenId: response.tokenId },
      config,
    }).then((response) => {
      console.log(response);
      localStorage.setItem("response", JSON.stringify(response));
      window.location.reload();
    });
  };

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (isLoggedIn()) {
      history.push(redirect);
    }
  }, [history, redirect]);

  const isLoggedIn = () => {
    return localStorage.getItem("response") ? true : false;
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            {
           
                <div className="google" >
                <GoogleLogin
                  clientId="41827559099-qfdtqfghmce5qqgl1ausr07rpi0n4be2.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={responsesSuccess}
                  onFailure={responsesFail}
                  cookiePolicy={"single_host_origin"}
                  
                />
                </div>
              
             
            }
          </CardContent>
        </Card>
      </div>
    </Container>
    //   <div>
    //     <h1>Login with gmail</h1>
    //
    // />
    //   </div>

  );
};

export default Login;
