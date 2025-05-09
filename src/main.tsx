import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Failed to find the root element");
  
  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error("Failed to render the app:", error);
  // Display a fallback UI
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h1>Something went wrong</h1>
        <p>Please check the console for more information.</p>
      </div>
    `;
  }
}
