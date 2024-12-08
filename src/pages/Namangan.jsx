import React, { useState, useEffect } from "react";
import data from '../province.json'; // JSON faylini import qilish

function Namangan() {
  const [namanganData, setNamanganData] = useState(null);

  useEffect(() => {
    setNamanganData(data.viloyatlar.find((n) => n.nomi === 'Namangan'));
  }, []);

  if (!namanganData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="namangan-name">{namanganData.nomi}</h2>
      <p className="namangan-center">
        <strong>Markazi:</strong> {namanganData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {namanganData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {namanganData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {namanganData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {namanganData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  );
}

export default Namangan;
