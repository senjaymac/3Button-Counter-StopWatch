import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CounterPageRoute from './pages/CounterPageRoute';
import StopwatchPage from './pages/StopwatchPage';
import AgePage from './pages/AgePage';
import TodoPage from './pages/TodoPage';
import DogPicturePage from './pages/DogPicturePage';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>🐝 RETRO ARCADE 🐝</h1>
          <nav className="nav-links">
            <Link to="/">Color Buttons</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/stopwatch">Stopwatch</Link>
            <Link to="/age">Age</Link>
            <Link to="/todo">Todo</Link>
            <Link to="/dog">Dog Pictures</Link>
          </nav>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<CounterPageRoute />} />
            <Route path="/stopwatch" element={<StopwatchPage />} />
            <Route path="/age" element={<AgePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/dog" element={<DogPicturePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
