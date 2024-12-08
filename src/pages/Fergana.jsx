import React, { useEffect, useState } from 'react';
import data from '../province.json';
import './Fergana.css';

function Fergona() {
  const [fergonaData, setFergonaData] = useState(null);

  useEffect(() => {
    setFergonaData(data.viloyatlar.find((v) => v.nomi === 'Farg‘ona'));
  }, []);

  if (!fergonaData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container fergana">
      <h2 className="fergana-name">{fergonaData.nomi}</h2>
      <p className="fergana-center">
        <strong>Markazi:</strong> {fergonaData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {fergonaData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {fergonaData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {fergonaData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {fergonaData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  );
}

export default Fergona;
