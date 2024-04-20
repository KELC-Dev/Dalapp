import { ChangeEvent, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './App.css'
import CheckNo from './check-no.png'
import CheckSi from './check-si.png'

function App() {
  const [receiverInfo, setReceiverInfo] = useState("");
  const [qList, setQList] = useState<string[]>([]);
  const [checked,setChecked] = useState<boolean[]>([]);

  const inChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReceiverInfo(e.target.value);
  }

  const addToList = () => {
    var htmlinp = (document.getElementById("adder") as HTMLInputElement);
    //checked[qList.length] = false;
    setChecked([...checked,false]);
    setQList([...qList,htmlinp.value]);
    htmlinp.value = "";
  }

  const toggleCheck = (i:number) => {
    

    setChecked(checked.map((c,idx) => {
      return idx==i?!c:c;
    }))
  }

  const inputKey = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Cancel the default action, if needed
      e.preventDefault();
      // Trigger the button element with a click
      addToList();
    }
    
  }

  const process = () => {
    var txt = qList;
    var a = qList.filter((q,idx) => {
      if(checked[idx] == true){
        return true
      }else{
        return false
      }
    })
    var inf = a.join(", ");

    var htmlRes = (document.getElementById("rpta") as HTMLInputElement)
    htmlRes.value = inf;
  }

  return (
    <div className="tot">
      <nav className='navBar'>

      </nav>
      <main className='princ'>
        <div className="left">
          <div className='receiver'>
            <div className="inputer">
              <input onKeyDown={(e) => inputKey(e)} type="text" name="adder" id="adder" placeholder='Añadir texto...' />
              <button onClick={() => addToList()} className='addBTN'>Añadir</button>
            </div>
            <div className="colection">
              {qList.map((q, i) => (
                <div className='card' key={i}>
                  <div onClick={() => toggleCheck(i)} className='clicker'>
                    {checked[i]?
                    <img className='imgCheck' src={CheckSi} alt="" />
                    :
                    <img className='imgCheck' src={CheckNo} alt="" />
                    }
                    <h2 className='card-text'>{q}</h2>
                  </div>
                  <div className="card-btns">
                    <button className='card-btn editBTN'><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button className='card-btn deleteBTN'><FontAwesomeIcon icon={faTrash} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => process()} className='GoBTN'>Go Go Go</button>
        </div>
        <div className="right">
          <div className="res">
            <textarea readOnly name="rpta" id="rpta" cols={20} rows={30}></textarea>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
