import { useState } from 'react';
import './index.css'

//state
//api

function QrCode() {
  const [qrCodeImage, setQrCodeImage] = useState('')
  const [qrCodeData, setQrCodeData] = useState('')
  const [qrCodeImageSize, setQrCodeImageSize] = useState(150)
  const [loading, setLoading] = useState(false);

  const generateQrCode = () => {
    setLoading(true);
    setQrCodeImage('');
    setTimeout((console.log('time')), 5000)
    try {
      const uri = `https://api.qrserver.com/v1/create-qr-code/?size=${qrCodeImageSize}x${qrCodeImageSize}&data=${qrCodeData}`
      fetch(uri)
        .then(response => {
          if (response.ok) {
            setQrCodeImage(response.url)
          }
        })
    }
    finally {
      setLoading(false)
    }

  }

  const downloadQrCode = () => {
    fetch(qrCodeImage)
      .then(response => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "qr.png";
        link.click();
      })
  }

  const clearAll = () => {
    setLoading(false);
    setQrCodeImage('');
    setQrCodeImageSize('');
    setQrCodeData('');
  }

  return (
    <>
      <div className='col-md-10 mx-auto g-lg-5 py-5 align-items-center col-lg-5'>
        <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <h5 className='h4 text-center'>QR Code Generator</h5>
          {loading == true ? <h6>Processing...</h6> : ''}
          <div className="text-center">
            {
              qrCodeImage && <img src={qrCodeImage} className="mx-auto rounded img-thumbnail" alt="..." />
            }
          </div>
          <div className="my-3">
            <label htmlFor="input-data-for-qr-code" className="form-label">
              Data for QR Code:
            </label>
            <input
              type="text"
              className="form-control"
              value={qrCodeData}
              id="input-data-for-qr-code"
              placeholder="Enter data for QR code"
              onChange={e => setQrCodeData(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="input-image-size" className="form-label">
              Image size (eg. 150):
            </label>
            <input
              type="text"
              className="form-control"
              value={qrCodeImageSize}
              id="input-image-size"
              placeholder="Enter image size"
              onChange={e => setQrCodeImageSize(e.target.value)}
            />
          </div>

          <div className="mb-1 text-center">
            <button type="button"
              onClick={generateQrCode} className="btn mx-1 btn-primary generate-qr-code">Generate QR Code</button>
            <button type="button"
              onClick={downloadQrCode}
              className="btn mx-1 btn-success download-qr-code">Download QR Code</button>
              <button onClick={clearAll} className="btn btn-secondary">
                Clear
              </button>
          </div>

          <hr className="my-4" />
          <small className="text-body-secondary">
            Created By Ajit Ajit
          </small>
        </div>
      </div>
    </>
  )
}



function App() {
  return (
    <div className="app">
      <QrCode />
    </div>
  )
}

export default App;