import React from "react";
import { GoogleLogout } from "react-google-login";

const clientid =
  "597171598398-ovrnarm8i01hr194rhc185i2ahb74vul.apps.googleusercontent.com";

export default function Logout() {
  const onSuccess = () => {
    console.log("Log out successfull!");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout 
        clientId={clientid}
        buttonText={"Logou"}
        onLogoutSuccess={onSuccess}/>
    </div>
  );
}