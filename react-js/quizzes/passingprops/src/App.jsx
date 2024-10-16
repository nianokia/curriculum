import { useState } from 'react';
import Form from "./components/form.jsx";
import Message from "./components/message.jsx";
import './App.css'

function App() {
  const [userEmail, setUserEmail] = useState('');

  const handleReceiveData = (data) => {
    setUserEmail(data);
  };

  // DON'T DELETE - The app creates a userEmail state that is updated in the onSendData prop of the form component. Once the 
  // user clicks "Send", the userEmail state is updated and sent back to the parent. The parent then sends this userEmail to
  // the message component as an email prop. With this, the message component can conditionally render a "Thank you" message
  // if the user successfully enters an email.
  
  return (
    <>
      <div>
        <h1>Hello Techtonica</h1>
        <Form onSendData={handleReceiveData} />
        {!userEmail ? null : <Message email={userEmail} />}
      </div>
    </>
  )
}

export default App
