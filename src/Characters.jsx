import { useState, useEffect } from "react";
import axios from "axios";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character`);
      setCharacters(result.data.results);
    };
    fetchData();
  }, []);

  function handleClick(char) {
    setCharacter(char);
    setShow(true);
  }

  return (
    <>
      <ul className="character-list">
        {characters.map((character) => (
          <li
            key={character.id}
            className="character-item"
            onClick={() => handleClick(character)}
          >
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
      {show && (
        <div className="modal-container" onClick={() => setShow(false)}>
          <div className="modal">
            <img
              className="modal-image"
              src={character.image}
              alt={character.name}
            />
            <h1 className="modal-h1">{character.name}</h1>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Location: {character.origin.name}</p>
          </div>
        </div>
      )}
    </>
  );
}
