import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";
import PokemonCards from "./PokemonCards";
import {
  CardContainer,
  SectionStyled,
  TitleContainer,
  TitleStyled,
} from "./styles";

interface PokemonProps {
    name:string;
    types:string[];
    sprite:string;
    hp:number;
    moves:string[];
}


const ContainerPokemon = (): JSX.Element => {
  const { response, loading } = useAxios(
    "https://pokeapi.co/api/v2/pokemon?limit=70&offset=0"
  );

  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  useEffect(() => {
    console.log(response);
    console.log(loading);
  }, [response, loading]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const pokemonResults = response.results;

        const pokemonDetails:PokemonProps[] = await Promise.all(
          pokemonResults.map(async (pokemon:any) => {
            const detailResponse = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              types: detailResponse.data.types.map((type:any) => type.type.name),
              sprite: detailResponse.data.sprites.front_default,
              hp: detailResponse.data.stats.find((stat:any) => stat.stat.name === "hp").base_stat,
              moves: detailResponse.data.moves.slice(0, 4).map((move:any) => move.move.name)
            };
          })
        );

        setPokemons(pokemonDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAll();
  }, [response]);

  return (
    <>
      <SectionStyled>
        <TitleContainer>
          <svg
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.985 511.985"
            xmlSpace="preserve"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                style={{ fill: "rgb(211, 188, 141)" }}
                d="M491.859,156.348c-12.891-30.483-31.342-57.865-54.842-81.372 c-23.516-23.5-50.904-41.96-81.373-54.85c-31.56-13.351-65.091-20.125-99.652-20.125c-34.554,0-68.083,6.773-99.645,20.125 c-30.483,12.89-57.865,31.351-81.373,54.85c-23.499,23.507-41.959,50.889-54.85,81.372C6.774,187.91,0,221.44,0,255.993 c0,34.56,6.773,68.091,20.125,99.652c12.89,30.469,31.351,57.857,54.85,81.357c23.507,23.516,50.889,41.967,81.373,54.857 c31.562,13.344,65.091,20.125,99.645,20.125c34.561,0,68.092-6.781,99.652-20.125c30.469-12.891,57.857-31.342,81.373-54.857 c23.5-23.5,41.951-50.889,54.842-81.357c13.344-31.561,20.125-65.092,20.125-99.652C511.984,221.44,505.203,187.91,491.859,156.348z"
              />
              <path
                style={{ fill: "#E6E9ED" }}
                d="M0.102,263.18c0.875,32.014,7.593,63.092,20.023,92.465c12.89,30.469,31.351,57.857,54.85,81.357 c23.507,23.516,50.889,41.967,81.373,54.857c31.562,13.344,65.091,20.125,99.645,20.125c34.561,0,68.092-6.781,99.652-20.125 c30.469-12.891,57.857-31.342,81.373-54.857c23.5-23.5,41.951-50.889,54.842-81.357c12.438-29.373,19.156-60.451,20.031-92.465 H0.102z"
              />
              <path
                style={{ fill: "#434A54" }}
                d="M510.765,281.211c0.812-8.344,1.219-16.75,1.219-25.218c0-9.516-0.516-18.953-1.531-28.289 c-12.719,1.961-30.984,4.516-53.998,7.054c-43.688,4.82-113.904,10.57-200.463,10.57c-86.552,0-156.776-5.75-200.455-10.57 c-23.022-2.539-41.28-5.093-53.998-7.054C0.516,237.04,0,246.478,0,255.993c0,8.468,0.406,16.875,1.219,25.218 c41.53,6.25,133.027,17.436,254.773,17.436S469.234,287.461,510.765,281.211z"
              />
              <path
                style={{ fill: "#E6E9ED" }}
                d="M309.334,266.656c0,29.459-23.891,53.334-53.342,53.334c-29.452,0-53.334-23.875-53.334-53.334 c0-29.453,23.882-53.327,53.334-53.327C285.443,213.33,309.334,237.204,309.334,266.656z"
              />
              <path
                style={{ fill: "#434A54" }}
                d="M255.992,170.66c-52.936,0-95.997,43.069-95.997,95.997s43.062,95.988,95.997,95.988 s95.996-43.061,95.996-95.988C351.988,213.729,308.928,170.66,255.992,170.66z M255.992,309.335 c-23.522,0-42.663-19.156-42.663-42.678c0-23.523,19.14-42.663,42.663-42.663c23.531,0,42.654,19.14,42.654,42.663 C298.646,290.178,279.523,309.335,255.992,309.335z"
              />
              <path
                style={{ opacity: 0.2, fill: "#FFFFFF" }}
                d="M491.859,156.348c-12.891-30.483-31.342-57.865-54.842-81.372 c-23.516-23.5-50.904-41.96-81.373-54.85c-31.56-13.351-65.091-20.125-99.652-20.125c-3.57,0-7.125,0.078-10.664,0.219 c30.789,1.25,60.662,7.93,88.974,19.906c30.498,12.89,57.873,31.351,81.371,54.85c23.5,23.507,41.969,50.889,54.857,81.372 c13.359,31.562,20.109,65.092,20.109,99.646c0,34.56-6.75,68.091-20.109,99.652c-12.889,30.469-31.357,57.857-54.857,81.357 c-23.498,23.516-50.873,41.967-81.371,54.857c-28.312,11.969-58.186,18.656-88.974,19.906c3.539,0.141,7.093,0.219,10.664,0.219 c34.561,0,68.092-6.781,99.652-20.125c30.469-12.891,57.857-31.342,81.373-54.857c23.5-23.5,41.951-50.889,54.842-81.357 c13.344-31.561,20.125-65.092,20.125-99.652C511.984,221.44,505.203,187.91,491.859,156.348z"
              />
              <path
                style={{ opacity: 0.1 }}
                d="M20.125,355.645c12.89,30.469,31.351,57.857,54.85,81.357 c23.507,23.516,50.889,41.967,81.373,54.857c31.562,13.344,65.091,20.125,99.645,20.125c3.57,0,7.125-0.078,10.664-0.219 c-30.789-1.25-60.67-7.938-88.982-19.906c-30.483-12.891-57.857-31.342-81.364-54.857c-23.507-23.5-41.96-50.889-54.858-81.357 c-13.352-31.56-20.117-65.091-20.117-99.652c0-34.554,6.765-68.084,20.116-99.646C54.35,125.864,72.803,98.481,96.31,74.983 c23.507-23.507,50.881-41.968,81.364-54.858c28.312-11.976,58.193-18.656,88.982-19.906c-3.539-0.14-7.094-0.218-10.664-0.218 c-34.554,0-68.083,6.773-99.645,20.125c-30.483,12.89-57.865,31.351-81.373,54.858c-23.499,23.499-41.959,50.881-54.85,81.364 C6.774,187.91,0,221.44,0,255.993C0,290.553,6.774,324.085,20.125,355.645z"
              />
            </g>
          </svg>
          <TitleStyled>MY POKEMON</TitleStyled>

         
        </TitleContainer>
        <CardContainer>
            {pokemons !== null &&
              pokemons.map((pokemon) => {
                const { name, types, sprite, hp, moves} = pokemon;
                return (
                  <PokemonCards name={name} type={types} sprite={sprite} hp={hp} moves={moves}/>
                );
              })}
          </CardContainer>
      </SectionStyled>
    </>
  );
};

export default ContainerPokemon;
