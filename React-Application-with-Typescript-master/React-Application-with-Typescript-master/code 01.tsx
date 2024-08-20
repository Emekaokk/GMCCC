import React from 'react';

// Define props interface to specify the type of props
interface GreetingProps {
  name: string; // Name prop is of type string
}

// Functional component Greeting with props of type GreetingProps
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
