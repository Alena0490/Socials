import "./Network.css"
import Net from "./Net"
import data from "../socialsData"

const Network = () => {
    return (
    <div className="grid">
        {data.map((oneNetwork) =>{
            return <Net key={oneNetwork.id} {...oneNetwork}/>
        })}
    </div>
    )
}

export default Network