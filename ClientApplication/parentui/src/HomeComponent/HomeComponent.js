import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ParentInfoTableComponent from "../ParentInfoTableComponent/ParentInfoTableComponent";
import { useEffect, useState } from "react";

function HomeComponent() {
  const [userData, setuserData] = useState([]);
  // const [reloadstate,setreloadstate]=useState(0);
  useEffect( () => {
   axios(
      {url:"https://localhost:44309/ParentsDetails",
        method:'GET',
       headers:{ Authorization: `Bearer ${localStorage.accessToken}`}}
       ).then(res=>setuserData(res.data))
      
      //  console.log(userData)
  },[]);

  return (
    <>
      <div>
        <ParentInfoTableComponent data={userData} />
        {/* <button onClick={()=>setreloadstate(reloadstate+1)}> Reload {reloadstate}</button> */}
      </div>
    </>
  );
}

export default HomeComponent;
