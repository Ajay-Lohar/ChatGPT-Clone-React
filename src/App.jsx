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
import {sendMsgToOpenAI} from './openai';
import { use, useEffect, useRef, useState } from 'react';



function App() { 
  const msgEnd = useRef(null); 

  const [input , setInput] = useState("");
  const [masseges, setMasseges] = useState([{
    text: "hi am chat gpt ",
    isBot: true,
  }]);

  useEffect(() => {
    msgEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [masseges]);


  const handleSend = async () => {
    const text = input;
    setInput("");
    setMasseges([
       {text , isBot: false},
  
    ])

    const res = await sendMsgToOpenAI(text)
    setMasseges([...masseges,
       {text , isBot: false},
       {text: res, isBot: true},
      ])
  }
  
  const handleEnter = async (e) => {
    if (e.key === 'Enter') {
      await handleSend(); 
    }
  }

  return (
    <div className='App'>
    <div className="sideBar">
      <div className="upperSide">
            <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">Chat GPT</span></div>
              <button className="midBtn" onClick={()=>{window.location.reload}}><img src={addBtn} alt="" className="addBtn" />New Chat</button>
              <p >Devloped By Ajay Lohar</p>
              <div className="upperSideBottom">
                <button className="query"><img src={megIcon} alt="Query" />Wht is Programming ?</button>
                <button className="query"><img src={megIcon} alt="Query" />How to use in Api?</button>
               
              </div>
      </div>
      <div className="lowerSide">
        <div className="listItems"><img src={home} alt="ListItems Home" className="listItemsImg" />Home</div>
        <div className="listItems"><img src={saved} alt="ListItems Saved" className="listItemsImg" />Saved</div>
        <div className="listItems"><img src={rocket} alt="ListItems Pro" className="listItemsImg" />Upgrade To Pro</div>
        
      </div>

    </div>
    <div className="main">
    <div className="chats">

      <div className="chat"><img className='chatImg' src={userIcon} alt="" /><p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolore adipisci distinctio molestiae sed illum eligendi dolor. Nulla, quae adipisci!</p>
      </div>
      
     
      
      {messages.map((message, i)=>{
       return 
       <div className={message.isBot?"chat bot":"bot"}><img className='chatImg' src={message.isBot?gptImgLogo:userlcon} alt="" /><p className='text'>{message.text} </p>
      </div>;
      })}

        <div ref={msgEnd}/>

      </div>
      <div className="chatFooter"> 
        <div className="inp">
          <input type="text" placeholder='Send A Message ' value={input} onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value  )}}/><button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
        </div>
        <p>Chat GPT  may produce inaccurate informltion about people, places, or facts. ChatGPT August 20 Version.</p>
      </div>

    </div>


    </div>
  )
}

export default App 
