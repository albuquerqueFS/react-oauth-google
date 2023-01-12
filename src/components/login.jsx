import React from "react";
import { GoogleLogin } from "react-google-login";

const clientid =
  "597171598398-ovrnarm8i01hr194rhc185i2ahb74vul.apps.googleusercontent.com";

export default function Login() {
  const onSuccess = (res) => {
    console.log("Login success! Current user: " + res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login failed! res: " + res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientid}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
