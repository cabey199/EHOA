import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f9f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#2d8f2d', fontSize: '48px', textAlign: 'center' }}>
        EHOA - Ethiopian Hiking Organizers Association
      </h1>
      <p style={{ fontSize: '18px', textAlign: 'center', marginTop: '20px' }}>
        Uniting Hiking Groups Across Ethiopia
      </p>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button style={{
          backgroundColor: '#37a837',
          color: 'white',
          padding: '15px 30px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Join Our Community
        </button>
      </div>
      <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
        Direct render test - bypassing all complex components
      </p>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
