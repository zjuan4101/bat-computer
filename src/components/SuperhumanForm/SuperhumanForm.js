import React, { useState } from 'react';
import axios from 'axios';

const SuperhumanForm = ({ refreshSuperhumans }) => {
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');
  const [power, setPower] = useState('');
  const [weakness, setWeakness] = useState('');
  const [isHero, setIsHero] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/api/superhumans', {
        name,
        alias,
        power,
        weakness,
        isHero
      });
      console.log('Superhuman created:', response.data);
      refreshSuperhumans();
    } catch (err) {
      if (err.response) {
        console.error('Server responded with an error:', err.response.data);
        setError(`Failed to create superhuman: ${err.response.data.message}`);
      } else if (err.request) {
        console.error('No response received:', err.request);
        setError('Failed to create superhuman: No response received from server.');
      } else {
        console.error('Error in setting up the request:', err.message);
        setError(`Failed to create superhuman: ${err.message}`);
      }
    }
  };

  return (
    <div>
      <h2>Create Superhuman</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Power"
          value={power}
          onChange={(e) => setPower(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Weakness"
          value={weakness}
          onChange={(e) => setWeakness(e.target.value)}
          required
        />
        <label>
          Is Hero:
          <input
            type="checkbox"
            checked={isHero}
            onChange={() => setIsHero(!isHero)}
          />
        </label>
        <button type="submit">Create Superhuman</button>
      </form>
    </div>
  );
};

export default SuperhumanForm;
