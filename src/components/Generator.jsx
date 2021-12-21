import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./Generator.scss";

const Generator = () => {
  const [inputValue, setInputValue] = useState("");

  let screenSize = 270;

  return (
    <div className="generator__container">
      <h1>Qr-code generator</h1>
      <div className="generator__wrapper">
        <input
          className="generator__input"
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Введите текст для QR-code"
          value={inputValue}
        />
        {inputValue ? (
          <QRCode value={inputValue} size={screenSize} />
        ) : (
          <p>Введите текст</p>
        )}
      </div>
    </div>
  );
};

export default Generator;
