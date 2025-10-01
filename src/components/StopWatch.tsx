import { useState, useRef, useEffect } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0); // time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime(prev => prev + 10); // update every 10ms
      }, 10);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning) setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Format time as MM:SS:MS
  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div style={{ backgroundColor: '#000', color: 'pink', padding: '20px', textAlign: 'center' }}>
      <h2>Stopwatch</h2>
      <p style={{ fontSize: '2rem' }}>{formatTime(time)}</p>
      <button onClick={handleStart} disabled={isRunning} style={{ margin: '0 10px'}}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      <button onClick={handleReset} style={{ margin: '0 10px'}}>Reset</button>
    </div>
  );
};

export default StopWatch;
