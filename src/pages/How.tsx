import React from 'react';
import { Link } from 'react-router-dom';
import {
  PenTool,
  Upload,
  Clock,
  Award,
  Brain,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import TimelineItem from '../components/Timeline';

function How() {
  const steps = [
    {
      icon: PenTool,
      title: 'Draw and Label Digits',
      description: 'Use our interactive canvas to draw digits (0-9) and label them correctly. Each submission contributes to the training dataset.',
    },
    {
      icon: Upload,
      title: 'Submit Training Data',
      description: 'Your drawings are converted into 28x28 matrices and submitted on-chain through the submitData function.',
    },
    {
      icon: Clock,
      title: 'Two-Week Cycle',
      description: 'Participate in the two-week submission cycle. The more quality data you contribute, the higher your potential rewards.',
    },
    {
      icon: Award,
      title: 'Earn NFT Rewards',
      description: 'Receive NFTs based on your contributions. These tokens represent your stake in the project and future governance rights.',
    },
    {
      icon: Brain,
      title: 'Model Training',
      description: 'Once 65% ownership is achieved, the community can participate in training the model using the collected dataset.',
    },
    {
      icon: CheckCircle,
      title: 'Submit Weights',
      description: 'Trained model weights are submitted through the submitWeights function, ensuring transparency and verifiability.',
    },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            How It Works
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join us in building the future of AI through a simple, transparent, and rewarding process.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-16">
          {steps.map((step, index) => (
            <TimelineItem
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Technical Details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Specifications
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Smart Contract
              </h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Built with Rust on Arbitrum Stylus
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Efficient on-chain data storage
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Transparent validation mechanisms
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Data Format
              </h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  28x28 binary matrices
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Standardized digit labels (0-9)
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Cryptographic verification
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/playground"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Start Contributing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default How;