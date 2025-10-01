import './App.css';
import Button from './components/Button';
import CounterPage from './components/CounterPage';
import StopWatch from './components/StopWatch';
import AgeCounter from './components/AgeCounter';
import TodoApp from './components/TodoList';
import SimpleTodo from './components/SimpleTodo';
import DogPicture from './components/DogPicture';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐝 RETRO ARCADE 🐝</h1>
      </header>
      
      <main className="app-main">
        <section className="component-section">
          <h2>Color Buttons</h2>
          <div className="button-group">
            <Button color="#3b82f6" label="Blue" onClick={() => console.log("blue")} />
            <Button color="#ef4444" label="Red" onClick={() => console.log("red")} />
            <Button color="#22c55e" label="Green" onClick={() => console.log("green")} />
          </div>
        </section>

        <section className="component-section">
          <h2>Counter</h2>
          <CounterPage />
        </section>

        <section className="component-section">
          <h2>Stopwatch</h2>
          <StopWatch />
        </section>

        <section className="component-section">
          <h2>Age Counter</h2>
          <AgeCounter />
        </section>

        <section className="component-section">
          <h2>Notes App</h2>
          <SimpleTodo />
        </section>

        <section className="component-section">
          <h2>Random Dog</h2>
          <DogPicture />
        </section>
      </main>
    </div>
  );
}

export default App;
