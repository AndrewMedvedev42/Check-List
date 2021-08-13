//REACT
import {useEffect, useState} from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import FadeIn from 'react-fade-in';
//REDUX
import {useDispatch} from "react-redux"
import {loadPhase1Stats,loadPhase2Stats,loadPhase3Stats} from "../redux/actions/phaseActions"

export const ListTemple = ({phaseName, data, isDone}) => {
    const [phaseObj, setPhaseObj] = useState({})
    const dispatch = useDispatch()

    const gainStatuses = (e) => {
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

    const handleChange = (e) => {
        let CheckBoxStatus = JSON.parse(localStorage.getItem(phaseObj.phaseCodeName))
        const input = document.getElementById(`${e}`)
        CheckBoxStatus.tasks.find((item)=>{
            if(item.id === e){
                if(item.isChecked === false){
                    for (let i = 0; i < CheckBoxStatus.tasks.length; i++) {
                        if(e === CheckBoxStatus.tasks[i].id){
                            CheckBoxStatus.tasks[i].isChecked = true;
                            break;
                        }
                    }
                    localStorage.setItem(phaseObj.phaseCodeName, JSON.stringify(CheckBoxStatus))
                    gainStatuses(CheckBoxStatus)
                    input.setAttribute("defaultChecked", true)

                }else{
                    for (let i = 0; i < CheckBoxStatus.tasks.length; i++) {
                        if(e === CheckBoxStatus.tasks[i].id){
                            CheckBoxStatus.tasks[i].isChecked = false;
                            break;
                        }
                    }
                    localStorage.setItem(phaseObj.phaseCodeName, JSON.stringify(CheckBoxStatus))
                    gainStatuses(CheckBoxStatus)
                    input.setAttribute("defaultChecked", false)
                }
            }
        })
    }

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


    useEffect(()=>{
        const obj = JSON.parse(localStorage.getItem(data.phaseCodeName))
        setPhaseObj(obj)
    },[data.phaseCodeName])

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