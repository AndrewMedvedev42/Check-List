//REACT
import {React} from "react"
import {phaseOneList, phaseTwoList, phaseThreeList} from "./CheckListObject"
import {ListTemplate} from "./components/ListTemplate"
import {RandomFact} from "./components/randomFact"
//REDUX
import {useSelector} from "react-redux"

function App(){

  // imports overall status of the each phase from redux store
  const phase1Status = useSelector(state => state.Phases.phase1)
  const phase2Status = useSelector(state => state.Phases.phase2)
  const phase3Status = useSelector(state => state.Phases.phase3)


  //In section "mainSection" Phase1 with being shown first by default
  //As you could see, I placed default objects for each phase in <Listtemple> through props
  //"isDone" gets the overall status of its phase to render the "Checked" icon if the state is "true"
  //Phase2 and Phase3 requires the overall status of the previous phase(s) 
  //When overall statuses of each phase are "true", it will render the component with a random fact
  return (
    <div className="App">
      <h1 className="MainTitle">Things I need to learn</h1>
      <section className="mainSection">
        <ListTemplate data={phaseOneList} phaseName="Phase№1" isDone={phase1Status}/>
        {phase1Status ? (<ListTemplate phaseName="Phase№2" data={phaseTwoList} isDone={phase2Status}/>):""}
        {phase1Status && phase2Status ? (<ListTemplate phaseName="Phase№3" data={phaseThreeList} isDone={phase3Status}/>):""}
        {phase1Status && phase2Status && phase3Status ? (<RandomFact/>):""}
      </section>
    </div>
  );
}

export default App;
