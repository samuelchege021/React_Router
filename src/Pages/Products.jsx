import { useParams } from "react-router-dom"

export default function Products(){


const {id}=useParams()
    
return <div>


<h1>product list</h1>

<p>showing prosuct with id:{id}</p>





</div>






}