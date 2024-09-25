import {
    ButtonStyled,
    Trainer,
    UserContainer,
    UserFormat,
    UserInformation,
    UserInformationText,
    UserSprite,
    UserSpriteInformation,
  } from "./styles";
  
  import trainer from "../../../../assets/img/trainer.png";

  /* object with a property username that must be a string*/
  interface User {
    username:string;
  }

  /*user = object type "User" must have a property username that has a string value 
    we use this way to work with another object 
    follows the inerface being used in "User"

    Logout doesnt accept any arguments or returns a value is just used in parent component
  */
   
  interface UserLoggedProps {
    user:User;
    onLogout:() =>void;
  }

  const UserLogged = ({ user, onLogout }:UserLoggedProps): JSX.Element => {
    return (
      <UserContainer>
        <UserFormat>
          <UserInformationText>
            <Trainer>TRAINER CARD</Trainer>
            <UserInformation>Name: {user.username}</UserInformation>
            <UserInformation>Money: </UserInformation>
            <UserInformation>Pokédex: </UserInformation>
            <UserInformation>Started: </UserInformation>
          </UserInformationText>
          <UserSpriteInformation>
            <p>USER ID: </p>
            <UserSprite src={trainer} alt="Trainer Sprite" />
          </UserSpriteInformation>
        </UserFormat>
        <ButtonStyled onClick={onLogout}>Logout</ButtonStyled>
      </UserContainer>
    );
  };
  
  export default UserLogged;
