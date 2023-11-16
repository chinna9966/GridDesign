import "./styles.css";
import Categories from "./categories";
import Footer from "./footer";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faFilter } from "@fortawesome/free-solid-svg-icons";

// import { FaFilter } from "react-icons/fa";

import Grid from "./grid";

export default function App() {
  return (
    <>
      <div className="top-bar">
        <a
          style={{
            width: "10%"

            // backgroundColor:"blue"
          }}
          href="https://www.edyoda.com/stories"
          className="logo_container"
        >
          <div>
            <div className="logo">Edyoda</div>
            <p className="stories_logo">Stories</p>
          </div>
        </a>

        <div className="explore_cat">
          Explore Categories
          <span style={{ marginLeft: "10px" }}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
              alt="icon"
            />
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "70%"
            // backgroundColor:"grey",
            // paddingLeft:"50px"
            // marginLeft:"50px"
          }}
        >
          <div
            style={{
              width: "70%",
              //  backgroundColor:"grey",
              display: "flex",
              justifyContent: "flex-end"
              // textAlign:"center"
            }}
          >
            <p
              style={{
                fontSize: "15px",
                letterSpacing: "1px",
                opacity: "20%",
                lineHeight: "1",
                wordSpacing: "5px",
                fontWeight: "600",
                fontFamily: "sans-serif"
              }}
            >
              Edyoda is a learning and knowledge
              <br />
              sharing platform for techies.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "20%",
              justifyContent: "right"
              //  backgroundColor:"blueviolet",
              // paddingInlineStart: "40px"
            }}
          >
            <button
              style={{
                // padding:"10px",
                borderRadius: "30px",
                backgroundColor: "blue",
                color: "white",
                fontSize: "12px",
                fontFamily: "Sans-serif",
                fontWeight: "600",
                border: "none",
                padding: "14px 25px",
                letterSpacing: ".1px",
                cursor: "pointer",
                background: "linear-gradient(269deg,#0048ff,#0096ff)",
                boxShadow: "2px 2px 2px grey"
              }}
            >
              Go To Main Website
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "75%",
          // backgroundColor: "blue",
          // height:"auto",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Categories />
        <Grid />
      </div>
      <Footer />
    </>
  );
}
