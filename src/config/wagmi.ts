import { http, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';

// Custom chain configuration for our network
const customChain = {
  id: 412346,
  name: 'Real Open AI Testnet',
  network: 'realopenai',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://95.179.246.157:8547'] },
    public: { http: ['http://95.179.246.157:8547'] },
  },
} as const;

export const config = createConfig({
  chains: [customChain],
  transports: {
    [customChain.id]: http(),
  },
});