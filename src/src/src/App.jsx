nexa-ia/
package.json (raiz)
{
  "name": "nexa-ia",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^4.5.0",
    "@vitejs/plugin-react": "^3.1.0"
  }
}vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
index.html 
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nexa IA</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
src/App.jsx
import { useState } from "react";
import "./index.css";

export default function App() {
  const [messages, setMessages] = useState([
    { sender: "ia", text: "Olá 👋, eu sou a Nexa IA. Como posso ajudar você hoje?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = { sender: "user", text: input };
    setMessages([...messages, newMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ia", text: "🤖 Esta é uma resposta simulada da IA." },
      ]);
    }, 600);
  };

  return (
    <div style={{background:"#111",color:"#fff",height:"100vh",display:"flex",flexDirection:"column"}}>
      <div style={{padding:"1rem",background:"#222",textAlign:"center",fontWeight:"bold",borderBottom:"1px solid #333"}}>
        Nexa IA
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"1rem"}}>
        {messages.map((msg,i)=>(
          <div key={i} style={{
            maxWidth:"70%",
            marginLeft: msg.sender==="user"?"auto":"0",
            marginRight: msg.sender==="ia"?"auto":"0",
            background: msg.sender==="user"?"#0d6efd":"#333",
            padding:"0.5rem 1rem",
            borderRadius:"0.5rem",
            marginBottom:"0.5rem"
          }}>
            {msg.text}
          </div>
        ))}
      </div>

      <div style={{display:"flex",padding:"1rem",borderTop:"1px solid #333",gap:"0.5rem"}}>
        <input
          type="text"
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==="Enter"&&sendMessage()}
          placeholder="Digite sua mensagem..."
          style={{flex:1,padding:"0.5rem",borderRadius:"0.25rem",background:"#222",color:"#fff",border:"none",outline:"none"}}
        />
        <button onClick={sendMessage} style={{padding:"0.5rem 1rem",background:"#0d6efd",borderRadius:"0.25rem",color:"#fff",border:"none"}}>
          Enviar
        </button>
      </div>
    </div>
  );
}
