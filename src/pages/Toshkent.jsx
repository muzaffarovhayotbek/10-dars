import React, { useState, useEffect } from "react";
import data from '../province.json'; // JSON faylini import qilish

function Toshkent() {
  const [toshkentData, setToshkentData] = useState(null);

  useEffect(() => {
    setToshkentData(data.viloyatlar.find((t) => t.nomi === 'Toshkent'));
  }, []);

  if (!toshkentData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="toshkent-name">{toshkentData.nomi}</h2>
      <p className="toshkent-center">
        <strong>Markazi:</strong> {toshkentData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {toshkentData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {toshkentData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {toshkentData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {toshkentData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  );
}

export default Toshkent;
