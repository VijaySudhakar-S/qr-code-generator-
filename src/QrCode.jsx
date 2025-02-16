import { useState } from "react";
import qrrrrGif from "../src/assets/qrrrr.gif";

export const QrCode = () => {
  const [img, setImage] = useState(qrrrrGif);
  const [loading, setLoding] = useState(false);
  const [qrData, setQrData] = useState("");
  function GenerateQR() {
    setLoding(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size350x350&data=${encodeURIComponent(
        qrData
      )}`;
      setImage(url);
      ``;
    } catch (error) {
      console.error("Error generating QR Code", error);
      qrData;
    } finally {
      setLoding(false);
    }
  }
  function DownloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }
  return (
    <div className="app-container">
      <div className="qr-head">QR Code Generator</div>
      <img src={img} alt="" className="QR-image" />
      {loading && <p>Please Wait..</p>}
      <div className="labels">
        <label htmlFor="dataInput">Sumbit URL</label>
        <input
          type="text"
          id="dataInput"
          placeholder="https://www.example.com"
          onChange={(e) => setQrData(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={GenerateQR} disabled={loading}>
          Generate QR Code
        </button>
        <button onClick={DownloadQR}>Download QR Code</button>
      </div>

      <div className="vijay">
        Designed By{" "}
        <a href="https://www.linkedin.com/in/vijay-sudhakar/" target="blank">
          Vijay Sudhakar
        </a>
      </div>
    </div>
  );
};
