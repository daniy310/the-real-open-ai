import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Lock,
  Users,
  Coins,
  Network,
  Shield,
  LineChart,
  Fingerprint
} from 'lucide-react';
import InfoCard from '../components/InfoCard';

function Why() {
  const benefits = [
    {
      icon: Brain,
      title: 'Democratized AI Training',
      description: 'Participate in training AI models without requiring expensive hardware or deep technical knowledge.',
      style: { left: '25%', top: '20%' }
    },
    {
      icon: Lock,
      title: 'Decentralized Architecture',
      description: 'Leverage blockchain technology to ensure transparency and immutability of the training process.',
      style: { left: '65%', top: '15%' }
    },
    {
      icon: Users,
      title: 'Community Ownership',
      description: 'Be part of a community that collectively owns and governs the development of AI models.',
      style: { left: '85%', top: '35%' }
    },
    {
      icon: Coins,
      title: 'Incentivized Participation',
      description: 'Earn rewards for contributing quality training data and participating in model validation.',
      style: { left: '15%', top: '45%' }
    },
    {
      icon: Network,
      title: 'Scalable Infrastructure',
      description: 'Built on Arbitrum Nitro and Stylus for high performance and low-cost operations.',
      style: { left: '45%', top: '40%' }
    },
    {
      icon: Shield,
      title: 'Secure & Verifiable',
      description: 'All training data and model updates are cryptographically secured and verifiable on-chain.',
      style: { left: '75%', top: '60%' }
    },
    {
      icon: LineChart,
      title: 'Transparent Progress',
      description: 'Track model performance and community contributions in real-time through on-chain metrics.',
      style: { left: '20%', top: '75%' }
    },
    {
      icon: Fingerprint,
      title: 'Fair Attribution',
      description: 'Every contribution is recorded on-chain, ensuring proper attribution and rewards distribution.',
      style: { left: '55%', top: '80%' }
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Why The Real Open AI?
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're revolutionizing AI development by making it truly open, collaborative, and accessible to everyone through blockchain technology.
          </p>
        </div>

        {/* Benefits Section with Blockchain Style */}
        <div className="relative h-[800px] mb-16">
          {/* SVG Connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {benefits.map((source, i) => 
              benefits.slice(i + 1).map((target, j) => (
                <line
                  key={`line-${i}-${j}`}
                  x1={`${parseFloat(source.style.left)}%`}
                  y1={`${parseFloat(source.style.top)}%`}
                  x2={`${parseFloat(target.style.left)}%`}
                  y2={`${parseFloat(target.style.top)}%`}
                  className="connector-line"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                />
              ))
            )}
          </svg>
          
          {/* Benefits Cards */}
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card absolute w-48"
              style={{
                ...benefit.style,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <InfoCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary-600 dark:bg-primary-500 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Join the Revolution?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Start contributing to the future of AI today. Join our community and help shape the next generation of machine learning models.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/how"
              className="px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Learn How It Works
            </Link>
            <Link
              to="/playground"
              className="px-6 py-3 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors"
            >
              Try the Playground
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;