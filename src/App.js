import {React} from "react"
import {PhaseOneList, PhaseTwoList, PhaseThreeList} from "./CheckListObject"
import {ListTemple} from "./components/ListTemple"

import {useSelector} from "react-redux"

function App(){

  const Phase1Status = useSelector(state => state.Phases.phase1)
  const Phase2Status = useSelector(state => state.Phases.phase2)

  return (
    <div className="App">
      <h1>My startup progress</h1>
      <section>
        <ListTemple data={PhaseOneList}/>
        {Phase1Status ? (<ListTemple data={PhaseTwoList}/>):""}
        {Phase1Status && Phase2Status ? (<ListTemple data={PhaseThreeList}/>):""}
      </section>
    </div>
  );
}

export default App;
