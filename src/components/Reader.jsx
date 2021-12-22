import React, { useState } from "react";
import QrReader from "react-qr-reader";
import './Reader.scss';

const Reader = () => {
  const [result, setResult] = useState("Результата нет");
  const [error, setError] = useState("");

  console.log(error);

  return (
    <div className="reader__container">
      <QrReader
        delay={300}
        onError={setError}
        onScan={setResult}
        style={{ width: "100%", margin: '30px auto', padding:'10px' }}
      />
      <p className="reader__result"  onClick={() => {navigator.clipboard.writeText(result)}}>{result}</p>
    </div>
  );
};

export default Reader;
