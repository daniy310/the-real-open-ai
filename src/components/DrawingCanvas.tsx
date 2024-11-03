import React, { useRef, useState, useEffect } from 'react';
import { Eraser, Download, Upload } from 'lucide-react';

interface DrawingCanvasProps {
  onMatrixUpdate: (matrix: number[][]) => void;
}

function DrawingCanvas({ onMatrixUpdate }: DrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    setContext(ctx);

    // Fill with black background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!context) return;
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return;
    const { offsetX, offsetY } = e.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    if (!context) return;
    setIsDrawing(false);
    context.closePath();
    updateMatrix();
  };

  const clearCanvas = () => {
    if (!context || !canvasRef.current) return;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    updateMatrix();
  };

  const updateMatrix = () => {
    if (!canvasRef.current || !context) return;

    const imageData = context.getImageData(0, 0, 280, 280);
    const matrix: number[][] = Array(28).fill(0).map(() => Array(28).fill(0));

    // Sample every 10th pixel to create 28x28 matrix
    for (let y = 0; y < 28; y++) {
      for (let x = 0; x < 28; x++) {
        const pixelX = x * 10;
        const pixelY = y * 10;
        const i = (pixelY * 280 + pixelX) * 4;
        // Check if pixel is white (255) or black (0)
        matrix[y][x] = imageData.data[i] > 127 ? 1 : 0;
      }
    }

    onMatrixUpdate(matrix);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={280}
          height={280}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          className="border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-crosshair"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={clearCanvas}
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <Eraser className="w-4 h-4 mr-2" />
          Clear
        </button>
      </div>
    </div>
  );
}

export default DrawingCanvas;