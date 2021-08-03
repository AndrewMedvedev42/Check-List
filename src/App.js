import {createElement, React, useState} from "react"
import {CheckListObject} from "./CheckListObject"

function App() {

  // const [checked, setChecked] = useState(false)
 
  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  return (
    <section className="App">
      <div>
        <h1>My startup progress</h1>
        {CheckListObject.map((item)=>{
          const {phaseName, tasks} = item
          return (
            <section>
              <h1>{phaseName}</h1>
              <label>
                {tasks.map((item)=>{
                  return (<div>
                            <input type="checkbox"/><span>{item.taskName}</span>
                          </div> )
                })}
              </label>
            </section>
          )
        })}
        {/* <label>
        <input type="checkbox" checked={checked} onChange={handleChange}/>My Value
        </label> */}
      </div>
    </section>
  );
}

export default App;
