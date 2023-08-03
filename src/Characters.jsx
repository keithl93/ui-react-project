import { useState, useEffect } from "react";
import axios from "axios";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character`);
      setCharacters(result.data.results);
    };
    fetchData();
  }, []);
  return (
    <>
      <ul className="character-list">
        {characters.map((character) => (
          <li key={character.id} className="character-item">
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
      <div id="portal"></div>
    </>
  );
}
