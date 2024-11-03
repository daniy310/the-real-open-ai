import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { Brain, Save, Wand2 } from 'lucide-react';
import DrawingCanvas from '../components/DrawingCanvas';

type Mode = 'train' | 'predict';

function Playground() {
  const { isConnected } = useAccount();
  const [mode, setMode] = useState<Mode>('train');
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [selectedDigit, setSelectedDigit] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);

  const handleSubmit = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Implement contract interaction
      console.log('Submitting matrix:', matrix);
      console.log('Selected digit:', selectedDigit);
    } catch (error) {
      console.error('Error submitting data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePredict = async () => {
    setIsSubmitting(true);
    try {
      // API call implementation
      const response = await fetch('https://api.realopenai.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ matrix }),
      });
      
      if (!response.ok) throw new Error('Prediction failed');
      
      const data = await response.json();
      setPrediction(data.prediction);

      // Contract call implementation (commented out)
      /*
      const result = await contract.classify(matrix);
      setPrediction(result.toNumber());
      */
    } catch (error) {
      console.error('Error predicting:', error);
      alert('Failed to get prediction. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Brain className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {mode === 'train' ? 'Training Playground' : 'Prediction Playground'}
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {mode === 'train'
              ? 'Draw a digit (0-9) and help train our decentralized AI model.'
              : 'Draw a digit and let our AI model predict what number you drew.'}
          </p>
        </div>

        {/* Mode Selection */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => {
                setMode('train');
                setPrediction(null);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                mode === 'train'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Training Mode
            </button>
            <button
              onClick={() => {
                setMode('predict');
                setPrediction(null);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                mode === 'predict'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Prediction Mode
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            {/* Drawing Canvas */}
            <DrawingCanvas onMatrixUpdate={setMatrix} />

            {mode === 'train' ? (
              <>
                {/* Digit Selection */}
                <div className="mt-8">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select the digit you drew:
                  </label>
                  <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
                    {Array.from({ length: 10 }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedDigit(i)}
                        className={`p-4 text-lg font-medium rounded-lg transition-colors ${
                          selectedDigit === i
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    onClick={handleSubmit}
                    disabled={!isConnected || isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white ${
                      isConnected
                        ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Save className="w-5 h-5 mr-2" />
                    {isConnected ? (
                      isSubmitting ? (
                        'Submitting...'
                      ) : (
                        'Submit to Blockchain'
                      )
                    ) : (
                      'Connect Wallet to Submit'
                    )}
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Prediction Button */}
                <div className="mt-8">
                  <button
                    onClick={handlePredict}
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    <Wand2 className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Predicting...' : 'Predict Digit'}
                  </button>
                </div>

                {/* Prediction Result */}
                {prediction !== null && (
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Prediction: {prediction}
                    </h3>
                  </div>
                )}
              </>
            )}

            {/* Instructions */}
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Instructions
              </h3>
              {mode === 'train' ? (
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Draw a single digit (0-9) in the canvas above</li>
                  <li>Select the corresponding digit number</li>
                  <li>Click submit to store your contribution on-chain</li>
                  <li>Earn NFT rewards based on your contributions</li>
                </ol>
              ) : (
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Draw any digit (0-9) in the canvas above</li>
                  <li>Click the predict button to see what our AI thinks you drew</li>
                  <li>Try different variations to test the model's accuracy</li>
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playground;