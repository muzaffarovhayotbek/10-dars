import React, { useState, useEffect } from 'react';
import data from '../province.json';

function Andijan() {
  const [andijon, setAndijon] = useState(null);

  useEffect(() => {
    const andijonData = data.viloyatlar.find((item) => item.nomi === 'Andijon');
    setAndijon(andijonData);
  }, []);

  return (
    <div className="container mx-auto">
      {andijon ? (
        <div className='border-rounded'>
          <h2 className="text-meduim text-white">{andijon.nomi}</h2>
          <p className='font-medium'>Markazi: {andijon.markazi}</p>
          <p>Maydoni: {andijon.maydoni}</p>
          <p>Aholisi: {andijon.aholisi}</p>
          <h3>Iqtisodiy sohalar:</h3>
          <ul>
            {andijon.iqtisodiy_sohalar.map((soha, index) => (
              <li key={index}>{soha}</li>
            ))}
          </ul>
          <h3>Asosiy daryolar:</h3>
          <ul>
            {andijon.asosiy_daryolar.map((daryo, index) => (
              <li key={index}>{daryo}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>Andijon ma'lumotlari topilmadi</h2>
      )}
    </div>
  );
}

export default Andijan;
