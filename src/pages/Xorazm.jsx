import React, { useState, useEffect } from "react";
import data from '../province.json'; // JSON faylini import qilish

function Xorazm() {
  const [xorazmData, setXorazmData] = useState(null);

  useEffect(() => {
    setXorazmData(data.viloyatlar.find((x) => x.nomi === 'Xorazm'));
  }, []);

  if (!xorazmData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="xorazm-name">{xorazmData.nomi}</h2>
      <p className="xorazm-center">
        <strong>Markazi:</strong> {xorazmData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {xorazmData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {xorazmData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {xorazmData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {xorazmData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  );
}

export default Xorazm;
