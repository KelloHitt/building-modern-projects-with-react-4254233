import React from 'react';
import {createRoot} from 'react-dom';

const App = () => {
  return <h1>This is a React Script!</h1>
}

// Getting the root div element from index.html where the React app will render into
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);