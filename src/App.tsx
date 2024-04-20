import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [receiverInfo,setReceiverInfo] = useState("");

  const inChanged = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setReceiverInfo(e.target.value);
  }

  const process = () => {
    var txt = receiverInfo;
    txt = txt.split("\n").join(", ");
    
    var htmlRes = (document.getElementById("rpta") as HTMLInputElement)
    htmlRes.value = txt;
  }

  return (
    <div className="tot">
      <nav className='navBar'>

      </nav>
      <main className='princ'>
        <div className="left">
          <div className='receiver'>
            <textarea onChange={(e) => inChanged(e)} name="in" id="in" cols={30} rows={10}></textarea>
          </div>
          <button onClick={() => process()} className='GoBTN'>Go Go Go</button>
        </div>
        <div className="right">
          <div className="res">
            <textarea  readOnly name="rpta" id="rpta" cols={20} rows={30}></textarea>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
