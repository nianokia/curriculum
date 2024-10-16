function Message({email}) {
  
    return (
      <div>
        {/* DON'T DELETE - It's important for the parent (App.jsx) to send the email prop to the message component so that it can 
        conditionally render a message if the user succesfully enters an email in the form component */}
        {!email ? null : <p> Thank you for submiting your email: {email} </p>}
      </div>
    );
  }
  
  export default Message;
