import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ParentInfoTableComponent from "../ParentInfoTableComponent/ParentInfoTableComponent";
import { useEffect, useState } from "react";

function HomeComponent() {
  const [userData, setuserData] = useState([]);
  const fetchdata = async () => {
    const { data } = await axios.get("https://localhost:44309/ParentsDetails");
    setuserData(data);
  };
  useEffect(() => /* {
     axios.get("https://localhost:44309/ParentsDetails").then((response) => setuserData(response.data));
  }*/ {
    fetchdata();
  }, []);

  //console.log(userData);
  return (
    <>
      <div>
        <ParentInfoTableComponent data={userData} />
      </div>
    </>
  );
}

export default HomeComponent;
