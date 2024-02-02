
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './App';
import Results from './pages/Result';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
