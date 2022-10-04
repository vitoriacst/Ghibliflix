import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Route from './routes/routes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </div>
  );
}

export default App;
