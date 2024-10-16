import { useState } from 'react';

function Form({ onSendData }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // DON'T DELETE - the form component will send the final inputValue back to the parent component (App.jsx) when the user clicks "Send".
  // This is important so that the message component knows if the user entered an email or not to display a Thank you message.
  // The onSendData prop is the handleReceiveData function in the parent component. It was just renamed in the child component
  const handleSendData = () => {
    onSendData(inputValue);
  };

  return (
    <div>
      <input type="email" placeholder="Please enter your email" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSendData}>Send</button>
    </div>
  );
}

export default Form;
