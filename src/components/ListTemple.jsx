//REACT
import {useEffect, useState} from "react";
//REDUX
import {useDispatch} from "react-redux"
import {loadPhase1Stats,loadPhase2Stats,loadPhase3Stats} from "../redux/actions/phaseActions"

export const ListTemple = ({data}) => {
    const [list] = data
    const [phaseObj, setPhaseObj] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let CheckBoxStatus = JSON.parse(localStorage.getItem(phaseObj.phaseName))
        const input = document.getElementById(`${e}`)
        console.log(e);
        CheckBoxStatus.tasks.find((item)=>{
            if(item.id === e){
                if(item.isChecked === false){
                    for (var i = 0; i < CheckBoxStatus.tasks.length; i++) {
                        if(e === CheckBoxStatus.tasks[i].id){
                            CheckBoxStatus.tasks[i].isChecked = true;
                            CheckBoxStatus.statusOfAll[i] = true
                            break;
                        }
                    }
                    localStorage.setItem(phaseObj.phaseName, JSON.stringify(CheckBoxStatus))
                    input.setAttribute("defaultChecked", true)

                }else{
                    for (var i = 0; i < CheckBoxStatus.tasks.length; i++) {
                        if(e === CheckBoxStatus.tasks[i].id){
                            CheckBoxStatus.tasks[i].isChecked = false;
                            CheckBoxStatus.statusOfAll[i] = false
                            break;
                        }
                    }
                    localStorage.setItem(phaseObj.phaseName, JSON.stringify(CheckBoxStatus))
                    input.setAttribute("defaultChecked", false)
                }
            }
        })
    }

    if (localStorage.length === 3) {
        console.log();
      }else{
        localStorage.setItem(list.phaseName , JSON.stringify(list));
    }

    useEffect(()=>{
        const obj = JSON.parse(localStorage.getItem(list.phaseName))
        setPhaseObj(obj)
    },[list.phaseName])

    useEffect(()=>{
        if (phaseObj.tasks) {
            const array = phaseObj.tasks.map((item)=>{
                return item.isChecked
            })
            if(phaseObj.phaseName === "Phase №1"){
                dispatch(loadPhase1Stats(array))

            }else if(phaseObj.phaseName === "Phase №2"){
                dispatch(loadPhase2Stats(array))

            }else if(phaseObj.phaseName === "Phase №3"){
                dispatch(loadPhase3Stats(array))
            }
        }
    })

    return (
        <div>
            <h1>{phaseObj.phaseName}</h1>
            <section>
                {phaseObj.tasks && (
                    phaseObj.tasks.map((item)=>{
                        const {id, taskName, isChecked} = item
                        return (
                            <div key={id}>
                                <input id={id} defaultChecked={isChecked} type="checkbox" onChange={()=>{handleChange(id)}}/><span>{taskName}</span>
                            </div>)
                    })
                )}
            </section>
        </div>
    )
}