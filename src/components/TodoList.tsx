import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within TodoProvider');
  }
  return context;
};

const TodoInput: React.FC = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        flex: 1,
        margin: '0 0.5rem'
      }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

const TodoList: React.FC = () => {
  const { todos } = useTodo();

  return (
    <div>
      <TodoInput />
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

const TodoApp: React.FC = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default TodoApp;