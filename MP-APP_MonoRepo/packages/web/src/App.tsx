import { useState } from 'react';
import { DEFAULT_THEME, formatCurrency, formatDate } from '@mp_app_01/shared';

function App() {
  const [count, setCount] = useState(0);
  const today = new Date();

  return (
    <div style={{ backgroundColor: DEFAULT_THEME.background, color: DEFAULT_THEME.text }}>
      <h1>Vite + React + TypeScript</h1>
      <div>
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ backgroundColor: DEFAULT_THEME.primary, color: '#fff' }}
        >
          Zähler: {count}
        </button>
        <p>Beispiel für formatierte Währung: {formatCurrency(1234.56)}</p>
        <p>Heutiges Datum: {formatDate(today)}</p>
      </div>
    </div>
  );
}

export default App;
