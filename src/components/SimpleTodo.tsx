import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  done: boolean;
  subtasks: Task[];
}

const TaskItem: React.FC<{ task: Task; onUpdate: (task: Task) => void; onRemove: () => void }> = ({ task, onUpdate, onRemove }) => {
  const [input, setInput] = useState('');
  const [showSub, setShowSub] = useState(false);

  const addSub = () => {
    if (input.trim()) {
      onUpdate({ ...task, subtasks: [...task.subtasks, { id: Date.now(), title: input, done: false, subtasks: [] }] });
      setInput('');
    }
  };

  const updateSub = (index: number, updated: Task) => {
    const newSubs = [...task.subtasks];
    newSubs[index] = updated;
    onUpdate({ ...task, subtasks: newSubs });
  };

  const removeSub = (index: number) => {
    onUpdate({ ...task, subtasks: task.subtasks.filter((_, i) => i !== index) });
  };

  return (
    <div className="task-item">
      <div className="task-row">
        <input type="checkbox" checked={task.done} onChange={() => onUpdate({ ...task, done: !task.done })} />
        <span className="task-text" style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.title}</span>
        <button onClick={() => setShowSub(!showSub)}>Sub</button>
        <button onClick={onRemove}>×</button>
      </div>
      {showSub && (
        <div className="subtasks">
          <div className="task-input-row">
            <input className="task-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Subtask" onKeyPress={(e) => e.key === 'Enter' && addSub()} />
            <button onClick={addSub}>+</button>
          </div>
          {task.subtasks.map((sub, i) => (
            <TaskItem key={sub.id} task={sub} onUpdate={(updated) => updateSub(i, updated)} onRemove={() => removeSub(i)} />
          ))}
        </div>
      )}
    </div>
  );
};

const SimpleTodo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), title: input, done: false, subtasks: [] }]);
      setInput('');
    }
  };

  const updateTask = (index: number, updated: Task) => {
    const newTasks = [...tasks];
    newTasks[index] = updated;
    setTasks(newTasks);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="task-input-row">
        <input className="task-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New task" onKeyPress={(e) => e.key === 'Enter' && addTask()} />
        <button onClick={addTask}>Add</button>
      </div>
      {tasks.map((task, i) => (
        <TaskItem key={task.id} task={task} onUpdate={(updated) => updateTask(i, updated)} onRemove={() => removeTask(i)} />
      ))}
    </div>
  );
};

export default SimpleTodo;