import React, { useState } from 'react';
//finally
function Character({ character }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{character.name}</h3>
      <p className="character-height">Height: {character.height}cm</p>
      <p className="character-mass">Mass: {character.mass}kg</p>
      {showHomeworld && (
        <p className="character-planet">Homeworld: {character.homeworld.name}</p>
      )}
    </div>
  );
}

export default Character;

