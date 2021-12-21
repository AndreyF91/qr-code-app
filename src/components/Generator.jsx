import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./Generator.scss";

const Generator = () => {
  const [inputValue, setInputValue] = useState("");

  let canvasSize = 270;

  function downloadImage() {
    let canvas = document.getElementById("canvas");
    let image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let link = document.createElement("a");
    link.download = "my-image.png";
    link.href = image;
    link.click();
  }

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
          <div className="generator__inner">
            <QRCode
              id="canvas"
              className="generator__canvas"
              value={inputValue}
              size={canvasSize}
              onClick={downloadImage}
            />
            <span>Click img to download</span>
          </div>
        ) : (
          <p>Введите текст</p>
        )}
      </div>
    </div>
  );
};

export default Generator;
