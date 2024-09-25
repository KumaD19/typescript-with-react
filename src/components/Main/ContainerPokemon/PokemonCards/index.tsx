import { CardImg, CardStyled, CardTitle, TypeList, CardTitleSpan, MoveList,MoveContainer,PokeCardTypes, CardTitleSpanHp } from "./styles";

interface PokemonProps {
    name:string;
    type:string[];
    sprite:string;
    hp:number;
    moves:string[];
}

const PokemonCards = ({ name, type, sprite, hp, moves }:PokemonProps): JSX.Element => {
    return (
      <CardStyled>
        <CardTitle>
            <CardTitleSpan>{name.toUpperCase()}</CardTitleSpan>
            <CardTitleSpanHp>HP: {hp}</CardTitleSpanHp>
        </CardTitle>
        <CardImg src={sprite} alt={`${name} sprite`} />
        <TypeList>
          {type.map((t:string, index:number) => (
            <PokeCardTypes key={index} color={t}>{t}</PokeCardTypes> 
          ))}
        </TypeList>
        <MoveContainer>
            <p>Moves:</p>
            <MoveList>
            {moves.map((move:string, index:number) => (
                <li key={index}>{move}</li> 
            ))}
            </MoveList>
        </MoveContainer>
      </CardStyled>
    );
  };
  
  export default PokemonCards;