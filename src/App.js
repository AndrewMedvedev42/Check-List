import {React} from "react"
import {PhaseOneList, PhaseTwoList, PhaseThreeList} from "./CheckListObject"
import {ListTemple} from "./components/ListTemple"

function App() {
 
  return (
    <div className="App">
      <h1>My startup progress</h1>
      <section>
        <ListTemple data={PhaseOneList}/>
        <ListTemple data={PhaseTwoList}/>
        <ListTemple data={PhaseThreeList}/>
      </section>
    </div>
  );
}

export default App;
