import React, { useState , useEffect} from 'react';
import data from '../province.json';

function Qashqadaryo() {
  const [qashqadaryoData, setQashqadaryoData] = useState(null);

  useEffect(() => {
    setQashqadaryoData(data.viloyatlar.find((q) => q.nomi === 'Qashqadaryo'));
  }, []);

  if (!qashqadaryoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="qashqadaryo-name">{qashqadaryoData.nomi}</h2>
      <p className="qashqadaryo-center">
        <strong>Markazi:</strong> {qashqadaryoData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {qashqadaryoData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {qashqadaryoData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {qashqadaryoData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {qashqadaryoData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  );
}

export default Qashqadaryo;
