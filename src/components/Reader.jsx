import React, { useState } from "react";
import QrReader from "react-qr-reader";

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
        style={{ width: "50%", margin: '0 auto' }}
      />
      <p>{result}</p>
    </div>
  );
};

export default Reader;
