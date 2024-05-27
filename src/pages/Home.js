import React, { useState } from 'react';
import './AnimalRegistration.css'; // Import the CSS file

const Home = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { name, age, color });
    // You can use this data to submit the registration to a server or database
  };

  return (
    <div className="animal-registration-container">
      <h1>Cadastre seu animal para adoção</h1>
      <form onSubmit={handleSubmit} className="animal-registration-form">
        <div className="input-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            placeholder="Digite o nome do animal"
          />
        </div>

        <div className="input-group">
          <label htmlFor="age">Idade:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
            placeholder="Digite a idade do animal"
          />
        </div>

        <div className="input-group">
          <label htmlFor="color">Cor:</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            required
            placeholder="Digite a cor do animal"
          />
        </div>

        <button type="submit" className="registration-button">
          Registrar Animal
        </button>
      </form>
    </div>
  );
};

export default Home;
