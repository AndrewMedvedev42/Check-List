export const ListTemple = ({data}) => {
    const [list] = data
    return (
        <div>
            <h1>{list.phaseName}</h1>
            <section>
                {
                    list.tasks.map((item)=>{
                        const {id, taskName} = item
                        return (
                                <div>
                                    <input key={id} type="checkbox"/><span>{taskName}</span>
                                </div>)
                    })
                }
            </section>
        </div>
    )
}