import { useAuth0 } from "@auth0/auth0-react";

import Panel from "./panel";
import Login from "./login";
import Logout from "./logout";
import Profile from "./profile";

function Main() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <Login></Login>;
  } else {
    return (
      <div>
        <Logout></Logout>
        <h1>Información de usuario</h1>
        <Profile></Profile>
        <Panel></Panel>
      </div>
    );
  }
}

export default Main;
