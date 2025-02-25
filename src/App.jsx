import './App.css'
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import megIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import { useEffect, useRef, useState } from 'react';
 


function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi, I am ChatGPT!", isBot: true }
  ]);

  useEffect(() => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    const res = await  sendMsgToOpenAI(input);
    console.log(res);
    if (!input.trim()) return;

    const text = input;
    setInput("");

    setMessages(prevMessages => [
      ...prevMessages,
      { text, isBot: false }
    ]);

    try {
      const res = await sendMsgToOpenAI(text);
      setMessages(prevMessages => [
        ...prevMessages,
        { text, isBot: false },
        { text: res, isBot: true }
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') {
      await handleSend();
    }
  };

  return (
    <div className='App'>
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">Chat GPT</span>
          </div>
          <button className="midBtn" onClick={() => window.location.reload()}>
            <img src={addBtn} alt="New Chat" className="addBtn" />New Chat
          </button>
          <p>Developed By Ajay Lohar</p>
          <div className="upperSideBottom">
            <button className="query">
              <img src={megIcon} alt="Query" />What is Programming?
            </button>
            <button className="query">
              <img src={megIcon} alt="Query" />How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Pro" className="listItemsImg" />Upgrade To Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          

          {messages.map((message, i) => (
            <div key={i} className={message.isBot ? "chat bot " : "chat "}>
              <img className='chatImg' src={message.isBot ? gptImgLogo : userIcon}  alt="" />
              <p className='text'>{message.text}</p>
            </div>
          ))}

          <div ref={msgEnd} />
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder='Send a message...'
              value={input}
              onKeyDown={handleEnter}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
