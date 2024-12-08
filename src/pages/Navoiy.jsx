import React, { useState, useEffect } from "react";
import data from '../province.json'; // JSON faylini import qilish

function Navoiy() {
  const [navoiyData, setNavoiyData] = useState(null);

  useEffect(() => {
    setNavoiyData(data.viloyatlar.find((n) => n.nomi === 'Navoiy'));
  }, []);

  if (!navoiyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="navoiy-name">{navoiyData.nomi}</h2>
      <p className="navoiy-center">
        <strong>Markazi:</strong> {navoiyData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {navoiyData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {navoiyData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {navoiyData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {navoiyData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  );
}

export default Navoiy;
