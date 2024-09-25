
import { MainStyle } from "./styles";
import ContainerPokemon from "./ContainerPokemon";
import Login from "./Login";
import ContactForm from "./ContactForm";

const DisplayPokemon = () => {
  /*Used as nothing for now*/ 
  const handleContactFormSubmit = (form: { email: string; message: string }) => {
    console.log("Form", form);
  };

  return (
    <>
      <MainStyle>
        <Login />
        <ContainerPokemon />
        <ContactForm onSubmit={handleContactFormSubmit} />
      </MainStyle>
    </>
  );
};

export default DisplayPokemon;