//REACT
import {React} from "react"
import {PhaseOneList, PhaseTwoList, PhaseThreeList} from "./CheckListObject"
import {ListTemplate} from "./components/ListTemplate"
import {RandomFact} from "./components/randomFact"
//REDUX
import {useSelector} from "react-redux"

function App(){

  // imports overall status of the each phase from redux store
  const Phase1Status = useSelector(state => state.Phases.phase1)
  const Phase2Status = useSelector(state => state.Phases.phase2)
  const Phase3Status = useSelector(state => state.Phases.phase3)


  //In section "mainSection" Phase1 with being shown first by default
  //As you could see, I placed default objects for each phase in <Listtemple> through props
  //"isDone" gets the overall status of its phase to render the "Checked" icon if the state is "true"
  //Phase2 and Phase3 requires the overall status of the previous phase(s) 
  //When overall statuses of each phase are "true", it will render the component with a random fact
  return (
    <div className="App">
      <h1 className="MainTitle">Things I need to learn</h1>
      <section className="mainSection">
        <ListTemplate data={PhaseOneList} phaseName="Phase№1" isDone={Phase1Status}/>
        {Phase1Status ? (<ListTemplate phaseName="Phase№2" data={PhaseTwoList} isDone={Phase2Status}/>):""}
        {Phase1Status && Phase2Status ? (<ListTemplate phaseName="Phase№3" data={PhaseThreeList} isDone={Phase3Status}/>):""}
        {Phase1Status && Phase2Status && Phase3Status ? (<RandomFact/>):""}
      </section>
    </div>
  );
}

export default App;
