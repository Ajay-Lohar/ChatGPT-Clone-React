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



function App() {  

  return (
    <div className='App'>
    <div className="sideBar">
      <div className="upperSide">
            <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">Chat GPT</span></div>
              <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />New Chat</button>
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
      
      <div className="chat bot"><img className='chatImg' src={gptImgLogo} alt="" /><p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi et laborum saepe sed. Laborum corrupti dolores quisquam tenetur, recusandae repudiandae dicta. Itaque corporis repellendus quod rerum. Minima perspiciatis velit molestiae sint asperiores, obcaecati ad omnis, amet perferendis ut, voluptatem doloribus reiciendis rerum dicta eveniet aspernatur similique ducimus et doloremque? Eius voluptates autem minima! Neque, voluptas? Optio minus vero ex est officiis iusto quis consequatur reiciendis deleniti iste, veniam, quae eum sequi, doloremque at possimus quisquam fuga. Veritatis odio aliquam placeat eaque repellat sapiente obcaecati sit accusantium laboriosam. Velit error, nostrum odit fuga libero, ut praesentium eaque ad excepturi, non maiores! </p>
      </div>

      </div>
      <div className="chatFooter">
        <div className="inp">
          <input type="text" placeholder='Send A Message '/><button className="send"><img src={sendBtn} alt="Send" /></button>
        </div>
        <p>Chat GPT  may produce inaccurate informltion about people, places, or facts. ChatGPT August 20 Version.</p>
      </div>

    </div>


    </div>
  )
}

export default App
