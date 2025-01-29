import { useState } from "react";
import Title from "./Title";
import Subtitle from "./subtitle";
import { useTranslation } from "react-i18next";

const PokemonSection = () => {
  const { t } = useTranslation();

  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleCapture = async () => {
    const numberPkm = Math.floor(Math.random() * 493) + 1;
    setPokemon(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${numberPkm}`
      );

      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }

      const data = await response.json();
      setPokemon(data);
      setFlipped(true);
    } catch (error) {
      console.error("Erro ao capturar o Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pokemon" className="sectionPokemon">
      <div className="container pokemon">
        <div className="ExpTitle">
          <Title text={t("pokemon.title")} level={1}></Title>
        </div>
        <Subtitle
          className="about-subtitle pokemon"
          text={t("pokemon.description")}
        ></Subtitle>
        <div className="pokemon-container">
          <div className="pokemon-details">
            <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
              <div className="flip-card-front">
                {isLoading ? (
                  <span className="flip-card-image">★</span>
                ) : (
                  <span className="flip-card-image">★</span>
                )}
              </div>
              {pokemon && (
                <div className="flip-card-back">
                  <img
                    className="flip-card-image"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                  <p>{pokemon.name}</p>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleCapture}
            className="btn"
            disabled={flipped === true}
          >
            {t("pokemon.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PokemonSection;
