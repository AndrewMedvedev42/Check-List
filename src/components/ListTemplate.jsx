//REACT
import {useEffect, useState} from "react";
//Import of fill check icon
import { AiFillCheckCircle } from "react-icons/ai";
//"Fade In" Component
import FadeIn from 'react-fade-in';
//REDUX
import {useDispatch} from "react-redux"
import {loadPhase1Stats,loadPhase2Stats,loadPhase3Stats} from "../redux/actions/phaseActions"

export const ListTemplate = ({phaseName, data, isDone}) => {
//Start of the component
//State that holds object of the Phase from localStorage
//Dispatch to dispatch actions with data
    const [phaseObj, setPhaseObj] = useState({})
    const dispatch = useDispatch()

//Sets all checkbox statuses into the array, to be later filtered in actions(later...),
//If "handleChange" was triggered
    const gainStatuses = (e) => {
        //In the result array will be looking something like that : [false, false, true]
        const statuses = e.tasks.map((item)=>{
            return item.isChecked
        })
        if(e.phaseCodeName === "Phase№1"){
            dispatch(loadPhase1Stats(statuses));
        }else if(e.phaseCodeName === "Phase№2"){
            dispatch(loadPhase2Stats(statuses));
        }else if(e.phaseCodeName === "Phase№3"){
            dispatch(loadPhase3Stats(statuses));
        }
    }

//Function which responsible for change of the status of the checkbox (in the UI and in the localStorage)
    const handleChange = (e) => {
        //Gets current phase object from localStorage
        let CheckBoxStatus = JSON.parse(localStorage.getItem(phaseObj.phaseCodeName))
        // const input = document.getElementById(`${e}`)

        //Filters through phase object to find corresponding checkbox by id (e) that was given by "onChange={()=>{handleChange(id)}}"
        //All happening to change status of the checkbox aka task in localStorage
        CheckBoxStatus.tasks.find((item)=>{
            if(item.id === e){
                //For example if status of checkbox aka task is "false" in localStorage
                //It will change it to "true" and store it back
                if(item.isChecked === false){
                    for (let i = 0; i < CheckBoxStatus.tasks.length; i++) {
                        if(e === CheckBoxStatus.tasks[i].id){
                            CheckBoxStatus.tasks[i].isChecked = true;
                            break;
                        }
                    }
                    localStorage.setItem(phaseObj.phaseCodeName, JSON.stringify(CheckBoxStatus))
                    gainStatuses(CheckBoxStatus)
                    // input.setAttribute("defaultChecked", true)
                
                }else{
                    //For example if status of checkbox aka task is "true" in localStorage
                    //It will change it to "false" and store it back
                    for (let i = 0; i < CheckBoxStatus.tasks.length; i++) {
                        if(e === CheckBoxStatus.tasks[i].id){
                            CheckBoxStatus.tasks[i].isChecked = false;
                            break;
                        }
                    }
                    localStorage.setItem(phaseObj.phaseCodeName, JSON.stringify(CheckBoxStatus))
                    gainStatuses(CheckBoxStatus)
                    // input.setAttribute("defaultChecked", false)
                }
            }
        })
    }


//Sets default phase object for coresponding phase to localStorage if places (by lenght) are empty
    if (localStorage.length === 0 && data.phaseCodeName === "Phase№1") {
        console.log(data.phaseCodeName);
        localStorage.setItem(data.phaseCodeName , JSON.stringify(data));

    }else if(localStorage.length === 1 && data.phaseCodeName === "Phase№2"){
        console.log(data.phaseCodeName);
        localStorage.setItem(data.phaseCodeName , JSON.stringify(data));

    }else if(localStorage.length === 2 && data.phaseCodeName === "Phase№3"){
        console.log(data.phaseCodeName);
        localStorage.setItem(data.phaseCodeName , JSON.stringify(data));
    }

//Gets phase object from localstorage by "phaseCodeName"(exapmle in CheckListObject),
//to implement saved or updated data, if page was refreshed.
    useEffect(()=>{
        const obj = JSON.parse(localStorage.getItem(data.phaseCodeName))
        setPhaseObj(obj)
    },[data.phaseCodeName])

//Sets all checkbox statuses into the array, to be later filtered in actions by default
    useEffect(()=>{
        if (phaseObj.tasks) {
            const statuses = phaseObj.tasks.map((item)=>{
                return item.isChecked
            })
            if(phaseObj.phaseCodeName === "Phase№1"){
                dispatch(loadPhase1Stats(statuses))

            }else if(phaseObj.phaseCodeName === "Phase№2"){
                dispatch(loadPhase2Stats(statuses))

            }else if(phaseObj.phaseCodeName === "Phase№3"){
                dispatch(loadPhase3Stats(statuses))
            }
        }
    },[phaseObj])
//Renders the phase and maps the tasks of the phase object that was ejected from local storage
//Status of checkbox will be marked by default depending from eject object from local storage
//Also the status of the checkbox can be dynamically changed by depending  if the state of "isChecked" was changed to "true or "false
//Status of the checkbox can be changed by triggering "handleChange" function
    return (
        <FadeIn>
        <div className="PhaseSection">
            <div className="PhaseTitleSection">
                <h1 className="PhaseTitle">{phaseObj.phaseTitle}</h1>
                {isDone ? (<FadeIn><AiFillCheckCircle className="DoneMessage" size={40}/></FadeIn>):""}
            </div>
            <section className="TasksList">
                {phaseObj.tasks && (
                    phaseObj.tasks.map((item)=>{
                        const {id, taskName, isChecked} = item
                        return (
                            <div key={id} className="Task">
                                <input id={id} defaultChecked={isChecked} type="checkbox" onChange={()=>{handleChange(id)}}/><span>{taskName}</span>
                            </div>)
                    })
                )}
            </section>
        </div>
        </FadeIn>
    )
}