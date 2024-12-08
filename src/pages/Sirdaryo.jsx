import React, { useState, useEffect } from "react";
import data from '../province.json'; // JSON faylini import qilish

function Sirdaryo() {
  const [sirdaryoData, setSirdaryoData] = useState(null);

  useEffect(() => {
    setSirdaryoData(data.viloyatlar.find((s) => s.nomi === 'Sirdaryo'));
  }, []);

  if (!sirdaryoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="sirdaryo-name">{sirdaryoData.nomi}</h2>
      <p className="sirdaryo-center">
        <strong>Markazi:</strong> {sirdaryoData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {sirdaryoData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {sirdaryoData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {sirdaryoData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {sirdaryoData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  );
}

export default Sirdaryo;
