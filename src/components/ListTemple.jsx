export const ListTemple = ({data}) => {
    const [list] = data

    const handleChange = (e) => {
        let CheckBoxStatus = JSON.parse(localStorage.getItem(e))
        const input = document.getElementById(`${e}`)
        if(CheckBoxStatus.checkStatus){
          localStorage.setItem(e, JSON.stringify({checkStatus:false}))
          input.setAttribute("defaultChecked", !CheckBoxStatus.checkStatus)
          console.log(input);
        }else{
          localStorage.setItem(e, JSON.stringify({checkStatus:true}))
          input.setAttribute("defaultChecked", !CheckBoxStatus.checkStatus)
          console.log(input);
        }
    }

    return (
        <div>
            <h1>{list.phaseName}</h1>
            <section>
                {
                    list.tasks.map((item)=>{
                        const {id, taskName} = item
                        if (localStorage.length === 8) {
                            console.log("Full :(");
                          }else{
                            localStorage.setItem(id , JSON.stringify({checkStatus:false}));
                        }
                        let CheckBoxStatus = JSON.parse(localStorage.getItem(id))
                        return (
                                <div>
                                    <input id={id} key={id} defaultChecked={CheckBoxStatus.checkStatus} type="checkbox" onChange={()=>{handleChange(item.id)}}/><span>{taskName}</span>
                                </div>)
                    })
                }
            </section>
        </div>
    )
}