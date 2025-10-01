import React from 'react';

interface ButtonProps {
  color: string;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ color, label, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: color }}>{label}</button>
    </div>
  );
};

export default Button;
