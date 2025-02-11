import './App.css'
import ChatGPTLogo from './assets/Chatgpt_logo.svg'

function App() {

  return (
    <>
    <div className="App flex">
      <div className="w-1/4 h-[100vh] ">
        <div className="upperside h-[60vh]  bg-yellow-300">
          <div className="uppersideTop flex flex-col  justify-center">
            <div className=' flex  border-black border-1 rounded-xl p-3 m-3'>
            <img src={ChatGPTLogo} alt="" className="logo  h-[50px]  "/>
            <span className="brand text-3xl ">ChatGPT</span> 
            </div>
            <button className=' bg-blue-300  border-black border-1 rounded-xl p-3 m-3 text-2xl'>+ New Chat</button>
            <div className="uppersidebottom flex flex-col text-sm">
              <button className=" p-3 m-1 border-black border-1 rounded-xl ">What is Programming ?</button>
              <button className=" p-3 m-1 border-black border-1 rounded-xl ">How to Use Api ?</button>
              </div> 
          </div>

        </div>
      <div className="lowerside h-[40vh] bg-amber-600">
        <div className='flex h-[100%]  flex-col justify-center items-center '>
          <h1 className=" p-3 m-1 border-black border-1 rounded-xl ">Home</h1>
          <h1 className=" p-3 m-1 border-black border-1 rounded-xl ">Saved</h1>
          <h1 className=" p-3 m-1 border-black border-1 rounded-xl ">Upgrade To Pro</h1>
        </div>

      </div>

      </div>
      <div className="w-3/4 h-[100vh] bg-red-400 flex flex-col justify-center items-center">

      <div className="w-200 h-[90vh] flex flex-col gap-3 bg-amber-500  ">
        <div className='flex p-2 m-4 gap-3'>
          <img className='h-[50px]  ' src={ChatGPTLogo} alt="" />Lorem ipsum dolor sit amet , expedita?

        </div>
        <div  className='flex p-2 m-4 gap-3'>
          <img className='h-[50px] ' src={ChatGPTLogo} alt="" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at temporibus a, ullam neque est exercitationem doloribus dolor eligendi tempore dolores iusto aut atque consectetur, dolorum id. Voluptatem quae omnis a quis at voluptas repellat inventore adipisci quo ut corrupti, maxime dicta. Autem, architecto? Alias praesentium fuga voluptatibus voluptas natus aperiam unde at totam aliquam optio voluptatem fugiat eaque quasi facere, necessitatibus error. Voluptatum ipsam nihil nobis minima est beatae dolorum modi sed culpa repudiandae, hic asperiores eum deserunt, ipsa aliquid recusandae nesciunt accusamus quas tempora officia expedita corporis ratione sunt dolor. Omnis laudantium, iure labore voluptas est repudiandae cum.?

        </div>

        <div className=' items-end'>
          <input type="text" placeholder='Send Message' name="" id="" />
          <button>Send</button>
        </div>

        
      </div>
      <div className='w-200 h-[10vh] bg-red-600 text-center '>
       Copy Rights - Ajay Lohar &copy;
      </div>
      
.
      </div>

    </div>

    </>
  )
}

export default App
