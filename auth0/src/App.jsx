import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Profile />
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </>
  );
}

export default App;
