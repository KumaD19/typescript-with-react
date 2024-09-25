import { useState } from "react";
import UserLogged from "./UserLogged";
import Form from "./Form";
import { LoginContainer } from "./styles";


/*we only need username*/
interface User {
  username: string;
}

const Login = (): JSX.Element => {
  /*only one data type used not an object so we can just declare the data type using <nameOfDataType>*/
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  /*Can either be a user object with username = string value or null*/ 
  const [user, setUser] = useState<User | null>(null);

  /*our object username = string value sets our user and changes to be true*/
  const handleLogin = (userData: User): void => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  
  const handleLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <LoginContainer>
      {isLoggedIn ? (
        /*type assertion our user data from userLogged needs to treate the variable as User type inteface used above*/
        <UserLogged user={user as User} onLogout={handleLogOut} />
      ) : (
        /*when form is submitted send data to our handleLogin function*/
        <Form onSubmit={handleLogin} />
      )}
    </LoginContainer>
  );
};

export default Login;
