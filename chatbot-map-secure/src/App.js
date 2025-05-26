
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "user", content: input }
        ]
      })
    });
    const data = await res.json();
    setResponse(data.choices?.[0]?.message?.content || "No response");
  };

  return (
    <div>
      <h1>Tour Guide Chatbot</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
