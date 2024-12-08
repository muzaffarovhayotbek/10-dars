import React, { useEffect, useState } from 'react';
import data from '../province.json';

function Buxoro() {
  const [buxoroData, setBuxoroData] = useState(null);

  useEffect(() => {
    setBuxoroData(data.viloyatlar.find((v) => v.nomi === 'Buxoro'));
  }, []);

  if (!buxoroData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container buxoro">
      <h2 className="buxoro-name">{buxoroData.nomi}</h2>
      <p className="buxoro-center">
        <strong>Markazi:</strong> {buxoroData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {buxoroData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {buxoroData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {buxoroData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {buxoroData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  );
}

export default Buxoro;
