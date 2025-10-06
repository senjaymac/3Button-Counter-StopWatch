import Button from '../components/Button';

function HomePage() {
  return (
    <div className="component-section">
      <h2>Color Buttons</h2>
      <div className="button-group">
        <Button color="#3b82f6" label="Blue" onClick={() => console.log("blue")} />
        <Button color="#ef4444" label="Red" onClick={() => console.log("red")} />
        <Button color="#22c55e" label="Green" onClick={() => console.log("green")} />
      </div>
    </div>
  );
}

export default HomePage;