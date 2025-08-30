import React from 'react';

export default function TestApp() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: 'red', fontSize: '24px' }}>TEST: React is working!</h1>
      <p>If you can see this, React is mounting correctly.</p>
      <p>Current time: {new Date().toLocaleString()}</p>
    </div>
  );
}
