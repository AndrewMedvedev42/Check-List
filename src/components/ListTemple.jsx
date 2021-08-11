import { useEffect } from "react";
import { useState } from "react";

export const ListTemple = ({data}) => {
    const [list] = data
    const [phaseObj, setPhaseObj] = useState({})

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
                            break;
                        }
                    }
                    localStorage.setItem(phaseObj.phaseName, JSON.stringify(CheckBoxStatus))
                    input.setAttribute("defaultChecked", true)
                    
                }else{
                    for (var i = 0; i < CheckBoxStatus.tasks.length; i++) {
                        if(e === CheckBoxStatus.tasks[i].id){
                            CheckBoxStatus.tasks[i].isChecked = false;
                            break;
                        }
                    }
                    localStorage.setItem(phaseObj.phaseName, JSON.stringify(CheckBoxStatus))
                    input.setAttribute("defaultChecked", false)
                }
            }
        })
        // const input = document.getElementById(`${e}`)
        // if(CheckBoxStatus.checkStatus){
        //   localStorage.setItem(e, JSON.stringify({checkStatus:false}))
        //   input.setAttribute("defaultChecked", !CheckBoxStatus.checkStatus)
        //   console.log(input);
        // }else{
        //   localStorage.setItem(e, JSON.stringify({checkStatus:true}))
        //   input.setAttribute("defaultChecked", !CheckBoxStatus.checkStatus)
        //   console.log(input);
        // }
    }

    if (localStorage.length === 3) {
        console.log("lol");
      }else{
        localStorage.setItem(list.phaseName , JSON.stringify(list));
    }

    useEffect(()=>{
        const obj = JSON.parse(localStorage.getItem(list.phaseName))
        setPhaseObj(obj)
    },[list.phaseName])

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