import React from "react";
import { useEffect } from "react";
// @ts-ignore
import LoginButton from "./components/login";
// @ts-ignore
import LogoutButton from "./components/logout";
import { gapi } from "gapi-script";

const clientid =
  "597171598398-ovrnarm8i01hr194rhc185i2ahb74vul.apps.googleusercontent.com";

export function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientid,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div>
        <LoginButton />
        <LogoutButton />
    </div>
  );
}
