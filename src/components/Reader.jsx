import React, { useState } from "react";
import QrReader from "react-qr-reader";
import "./Reader.scss";

const Reader = () => {
  const [result, setResult] = useState("Результата нет");
  const [error, setError] = useState("");

  return (
    <div className="reader__container">
      <QrReader
      className="reader__camera"
        delay={300}
        onError={setError}
        onScan={setResult}
        style={{ width: "100%", margin: "10px auto", padding: "0 10px" }}
      />
      {error ? <p className="reader__error">{error.message}</p> : null}
      <p
        className="reader__result"
        onClick={() => {
          navigator.clipboard.writeText(result);
        }}
      >
        {result}
      </p>
    </div>
  );
};

export default Reader;
