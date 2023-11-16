import "./styles.css";
import Tab from "./tabs";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaFilter } from "react-icons/fa";

export default function Categories() {
  const style = {
    marginTop: "120px",
    fontFamily: "sans-serif",
    fontSize: "35px",
    fontWeight: "lighter",
    color: "#333333",
    marginLeft: "25px",
    letterSpacing: "1px"
  };
  return (
    <div>
      <h1 style={style}>Latest Posts</h1>
      <p
        style={{
          fontFamily: "sans-serif",
          fontSize: "14px",
          letterSpacing: ".7px",
          marginTop: "40px",
          marginBottom: "15px"
        }}
      >
        <span
          style={{
            innerHeight: "10px",
            innerWidth: "10px"
          }}
        >
          <FaFilter
            style={{
              color: "#0080ff",
              fontSize: "18px",
              marginRight: "10px",
              marginLeft: "25px"
            }}
          />
          {/* <FontAwesomeIcon icon="fa-regular fa-filter" style={{fontSize:"20px"}} /> */}
        </span>
        Filter By Category
      </p>
      <div className="categories">
        <Tab name="All" />
        <Tab name="Artificial Intelligence" />
        <Tab name="Cloud Computing" />
        <Tab name="DevOps" />
        <Tab name="Programming Languages" />
        <Tab name="Mobile Application Development" />
        <Tab name="Technology and Tools" />
        <Tab name="Get a Job in a Tech Company" />
        <Tab name="Others" />
      </div>
    </div>
  );
}
