import {React} from "react"
import {PhaseOneList, PhaseTwoList, PhaseThreeList} from "./CheckListObject"
import {ListTemple} from "./components/ListTemple"
import {RandomFact} from "./components/randomFact"

import {useSelector} from "react-redux"

function App(){

  const Phase1Status = useSelector(state => state.Phases.phase1)
  const Phase2Status = useSelector(state => state.Phases.phase2)
  const Phase3Status = useSelector(state => state.Phases.phase3)

  return (
    <div className="App">
      <h1 className="MainTitle">Things I need to learn</h1>
      <section className="mainSection">
        <ListTemple data={PhaseOneList} phaseName="Phase№1" isDone={Phase1Status}/>
        {Phase1Status ? (<ListTemple phaseName="Phase№2" data={PhaseTwoList} isDone={Phase2Status}/>):""}
        {Phase1Status && Phase2Status ? (<ListTemple phaseName="Phase№3" data={PhaseThreeList} isDone={Phase3Status}/>):""}
        {Phase1Status && Phase2Status && Phase3Status ? (<RandomFact/>):""}
      </section>
    </div>
  );
}

export default App;
