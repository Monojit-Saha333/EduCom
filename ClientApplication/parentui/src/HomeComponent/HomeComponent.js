import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ParentInfoTableComponent from "../ParentInfoTableComponent/ParentInfoTableComponent";
import { useEffect, useState } from "react";

function HomeComponent() {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44309/ParentsDetails")
      .then((response) => setuserData(response.data));
  }, []);

  return (
    <>
      <div>
        <ParentInfoTableComponent data={userData} />
      </div>
    </>
  );
}

export default HomeComponent;
