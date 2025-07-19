// QRCodeGenerator.tsx
import React from 'react';
import QRCode from 'react-qr-code';

interface QRCodeGeneratorProps {
  value: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  value,
  size = 160,
  bgColor = "#ffffff",
  fgColor = "#000000",
}) => {
  return (
    <div
      className="p-4 rounded-lg shadow-md bg-white inline-block"
      style={{ backgroundColor: bgColor }}
    >
      <QRCode
        value={value}
        size={size}
        bgColor={bgColor}
        fgColor={fgColor}
        level="H"
      />
      <p className="text-center text-sm text-gray-600 mt-2">
        Escanea el código QR
      </p>
    </div>
  );
};

export default QRCodeGenerator;
