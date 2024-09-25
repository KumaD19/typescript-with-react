import { useState } from "react";

interface ExampleProps {
  name: string;
  age: number;
}

interface PersonState {
  name: string;
  isStudent: boolean;
}

const Example = ({ name, age }: ExampleProps): JSX.Element => {
  const [counter, setCounter] = useState<number | null>(0);

  const [person, setPerson] = useState<PersonState>({
    name: "luis",
    isStudent: false,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();

  }

  const handleOnChange = (e: React.ChangeEvent <HTMLInputElement>) =>{
    console.log(e.target.value)
  }

  return (
    <section>
      <h1>hola, {name}</h1>
      <p>tienes {age}</p>
      <button onClick={handleClick}></button>
    </section>
  );
};

export default Example;
