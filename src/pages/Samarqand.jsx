import React, { useState, useEffect } from "react";
import data from '../province.json'; // JSON faylini import qilish

function Samarqand() {
  const [samarqandData, setSamarqandData] = useState(null);

  useEffect(() => {
    setSamarqandData(data.viloyatlar.find((s) => s.nomi === 'Samarqand'));
  }, []);

  if (!samarqandData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="samarqand-name">{samarqandData.nomi}</h2>
      <p className="samarqand-center">
        <strong>Markazi:</strong> {samarqandData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {samarqandData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {samarqandData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {samarqandData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {samarqandData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  );
}

export default Samarqand;
