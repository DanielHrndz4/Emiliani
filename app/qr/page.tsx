'use client'

import { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function QRGenerator() {
  const [url, setUrl] = useState('https://ejemplo.com');
  const [qrValue, setQrValue] = useState('https://ejemplo.com');
  const qrRef = useRef<SVGSVGElement>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setQrValue(url);
  };

  const handleDownload = () => {
    if (!qrRef.current) return;

    const svg = qrRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Verificación explícita de que ctx no es null
    if (!ctx) {
      console.error('No se pudo obtener el contexto 2D del canvas');
      return;
    }

    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `qr-code-${Date.now()}.png`;
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };

    img.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgData)))}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Generador de Código QR</h1>
        
        <form onSubmit={handleGenerate} className="mb-8">
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
              URL para el código QR
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://ejemplo.com"
              required
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Generar QR
            </Button>
            
            {qrValue && (
              <Button
                type="button"
                onClick={handleDownload}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar QR
              </Button>
            )}
          </div>
        </form>

        {qrValue && (
          <div className="flex flex-col items-center">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <div ref={qrRef as any}>
                <QRCode
                  value={qrValue}
                  size={256}
                  level="H"
                  bgColor="#ffffff"
                  fgColor="#000000"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Escanea este código QR para ir a: {qrValue}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}