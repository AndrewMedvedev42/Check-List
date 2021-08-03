import {React} from "react"
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
            <section key={phaseName}>
              <h1>{phaseName}</h1>
              <label>
                {tasks.map((item)=>{
                    localStorage.setItem(item.idKey , JSON.stringify({checkStatus:item.isChecked, phaseName:phaseName}));
                    console.log(localStorage.getItem(item.idKey))
                  return (
                    <div>
                      <input type="checkbox"  checked={item.isChecked}/><span>{item.taskName}</span>
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
