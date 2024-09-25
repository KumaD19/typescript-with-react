import { useState } from "react";
import {
  ButtonStyled,
  FormContainer,
  FormStyled,
  InputContainer,
  InputStyled,
  PStyled,
} from "./styles";



/*
//We setup the type for our props,
//onSubmit is our prop 'function being used'
we set the password and username to each ensure our input being
returned is a string value this is the structure that our parent component is gonna recieve
since we are not returning any value to our child component we use => void

*/  
interface ContactFormProps {
    onSubmit:(form:{password:string; username:string})=> void;
}


interface FormState{
  username:string;
  password:string;
}
/* we then use :ContactFormProps to set up the types our onSubmit is gonna 
need to follow */ 
const Form = ({ onSubmit }: ContactFormProps): JSX.Element => {
  /*We set the data types for our username and password */
  const [form, setForm] = useState<FormState>({
    username: "",
    password: "",
  });
/**/
/*Event will be used when a change event in our input element is used*/ 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
/*handles our submit and passes our form data to our parent component*/ 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <FormContainer>
    <PStyled>POKELAB LOGIN</PStyled>
      <FormStyled onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="username">USERNAME</label>
          <InputStyled
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          ></InputStyled>
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">PASSWORD</label>
          <InputStyled
            type="password"
            name="password"
            id='password'
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          ></InputStyled>
        </InputContainer>
        <ButtonStyled type="submit">Login</ButtonStyled>
      </FormStyled>
    </FormContainer>
  );
};

export default Form;
