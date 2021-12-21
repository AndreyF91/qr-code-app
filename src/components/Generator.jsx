import React, { useState } from "react";
import QRCode from "qrcode.react";

const Generator = (props) => {
  
  const [inputValue, setInputValue] = useState ('');


  return (
    <div className="generator__container">
      <h2>Qr-code generator</h2>
      <input
        onChange={ (e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Введите текст для QR-code"
        value={inputValue}
      />
      <p></p>
      {inputValue ? <QRCode value={inputValue} bgColor="#fff" size="300" /> : <p>Введите текст</p> }
      
    </div>
  );
};

export default Generator;
