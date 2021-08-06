export const ListTemple = ({data}) => {
    const [list] = data

    const handleChange = (e) => {
        let CheckBoxStatus = JSON.parse(localStorage.getItem(e))
        if(CheckBoxStatus.checkStatus){
          localStorage.setItem(e, JSON.stringify({checkStatus:false}))
        }else{
          localStorage.setItem(e, JSON.stringify({checkStatus:true}))
        }
    }

    return (
        <div>
            <h1>{list.phaseName}</h1>
            <section>
                {
                    list.tasks.map((item)=>{
                        const {id, taskName} = item
                        if (localStorage.length === 6) {
                            console.log("storage is full");
                          }else{
                            localStorage.setItem(id , JSON.stringify({checkStatus:false}));
                        }
                        return (
                                <div>
                                    <input key={id} type="checkbox" onChange={()=>{handleChange(item.id)}}/><span>{taskName}</span>
                                </div>)
                    })
                }
            </section>
        </div>
    )
}