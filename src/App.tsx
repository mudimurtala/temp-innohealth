import { multiply } from './utils/math';
import React, { useEffect } from 'react';

async function fakeLogin(): Promise<string> {
  return 'User logged in successfully';
}

async function handleLogin(): Promise<void> {
  try {
    const message = await fakeLogin();
    console.log(message);
  } catch (err) {
    console.error('login failed', err);
  }
}

const App: React.FC = () => {
  const result = multiply(3, 4);

  useEffect(() => {
    // log result once after mount
    console.log('multiply(3,4) =', result);
    // perform login after mount
    handleLogin();
  }, [result]);

  return (
    <div className="p-10">
      <section className="bg-gray-100 p-8 rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="mb-4">This is my first real Tailwind section.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Get Started</button>
        <p className="mt-4">Result of multiply(3, 4): <strong>{result}</strong></p>
      </section>
    </div>
  );
};

export default App;
