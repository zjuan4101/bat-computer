import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SuperhumanList = () => {
  const [superhumans, setSuperhumans] = useState([]);

  useEffect(() => {
    axios.get('/api/superhumans')
      .then(response => setSuperhumans(response.data))
      .catch(error => console.error('Error fetching superhumans:', error));
  }, []);

  return (
    <div>
      <h1>Superhumans</h1>
      <ul>
        {superhumans.map(superhuman => (
          <li key={superhuman._id}>{superhuman.name} ({superhuman.alias})</li>
        ))}
      </ul>
    </div>
  );
};

export default SuperhumanList;
