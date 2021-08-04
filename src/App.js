import {React, useCallback, useEffect, useState} from "react"
import {CheckListObject} from "./CheckListObject"

function App() {

  const [checkStatus, setCheckStatus] = useState(false)
 
  const handleChange = (e) => {
    let CheckBoxStatus = JSON.parse(localStorage.getItem(e))
    if(CheckBoxStatus.checkStatus){
      localStorage.setItem(e, JSON.stringify({checkStatus:false}))
    }else{
      localStorage.setItem(e, JSON.stringify({checkStatus:true}))
    }
    
  };
  return (
    <section className="App">
      <div>
        <h1>My startup progress</h1>
        {CheckListObject.map((item)=>{
          const {phaseName, tasks} = item
          return (
            <section key={phaseName}>
              <h1>{phaseName}</h1>
              <label>
                {tasks.map((item)=>{
                    if (localStorage.length === 5) {
                      console.log("storage is full");
                    }else{
                      localStorage.setItem(item.idKey , JSON.stringify({checkStatus:item.isChecked, phaseName:phaseName}));
                    }
                    let CheckBoxStatus = JSON.parse(localStorage.getItem(item.idKey))
                    console.log(CheckBoxStatus);
                  return (
                    <div>
                      <input key={item.idKey} checked={CheckBoxStatus.checkStatus} onChange={()=>{handleChange(item.idKey)}} type="checkbox"/><span>{item.taskName}</span>
                    </div>)
                })}
              </label>
            </section>
          )
        })}
      </div>
    </section>
  );
}

export default App;
