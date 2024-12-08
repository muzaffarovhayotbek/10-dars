import React, { useState, useEffect } from "react";
import data from '../province.json'; // JSON faylini import qilish

function Surxondaryo() {
  const [surxondaryoData, setSurxondaryoData] = useState(null);

  useEffect(() => {
    setSurxondaryoData(data.viloyatlar.find((s) => s.nomi === 'Surxondaryo'));
  }, []);

  if (!surxondaryoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="surxondaryo-name">{surxondaryoData.nomi}</h2>
      <p className="surxondaryo-center">
        <strong>Markazi:</strong> {surxondaryoData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {surxondaryoData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {surxondaryoData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {surxondaryoData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {surxondaryoData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  );
}

export default Surxondaryo;
