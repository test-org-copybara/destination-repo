// Button Component
export const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

// Added new functionality
export const IconButton = ({ icon, onClick }) => {
  return <button onClick={onClick}><i>{icon}</i></button>;
};
