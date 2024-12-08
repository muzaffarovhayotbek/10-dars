import React, { useEffect, useState } from "react";
import data from '../province.json'


function  Jizzax(){
  const [jizzaxData, setJizzaxData] = useState(null)

  useEffect(() => {
    setJizzaxData(data.viloyatlar.find((j) => j.nomi === 'Jizzax'))
  }, [])

  if(!jizzaxData){
    return <div>Loading...</div>
  }

  return (
    <div>
       <h2 className="jizzax-name">{jizzaxData.nomi}</h2>
      <p className="jizzax-center">
        <strong>Markazi:</strong> {jizzaxData.markazi}
      </p>
      <p>
        <strong>Maydoni:</strong> {jizzaxData.maydoni}
      </p>
      <p>
        <strong>Aholisi:</strong> {jizzaxData.aholisi}
      </p>
      <p>
        <strong>Iqtisodiy sohalar:</strong>{' '}
        {jizzaxData.iqtisodiy_sohalar.join(', ')}
      </p>
      <p>
        <strong>Asosiy daryolar:</strong>{' '}
        {jizzaxData.asosiy_daryolar.join(', ')}
      </p>
    </div>
  )
}

export default Jizzax;

