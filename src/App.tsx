import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './config/wagmi';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Why from './pages/Why';
import How from './pages/How';
import Playground from './pages/Playground';
import { ThemeProvider } from './context/ThemeContext';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/why" element={<Why />} />
                <Route path="/how" element={<How />} />
                <Route path="/playground" element={<Playground />} />
              </Routes>
            </Layout>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;