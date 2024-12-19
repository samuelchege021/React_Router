import { Link, Outlet } from "react-router-dom"


export default function(){


return <div>


<h1>dash</h1>

<ul>

<li>



<Link to="profile">profile</Link>


</li>
<li>
<Link to="settings">settings</Link></li>



</ul>
<Outlet/>


{/* <Link to="/">homepage</Link> */}

</div>



}