export default function Card(props) {
  return (
    <a href={props.link} style={{ textDecorationLine: "none", color: "black" }}>
      <div
        style={{
          width: "325px",
          height: "400px",
          backgroundColor: "#EEFDEB",
          borderRadius: "15px",
          marginLeft: "15px",
          boxShadow: "5px 5px 10px gray",
          cursor: "pointer",
          border: "solid .5px powderblue"
        }}
      >
        <div>
          <img
            src={props.image}
            alt="img1"
            width="325px"
            height="200px"
            style={{ borderRadius: "15px 15px 0 0" }}
          />
        </div>
        <div style={{ marginLeft: "15px", marginRight: "15px" }}>
          <h3
            style={{
              fontFamily: "Trebuchet MS",
              letterSpacing: ".5px",
              fontWeight: "550",
              marginTop: "7px",

              // backgroundColor:"blueviolet",
              fontSize: "17.5px",
              marginRight: "10px",
              textAlign: "justify"
            }}
          >
            {props.title} <wbr />
            <span>...</span>
          </h3>
          <p
            style={{
              color: "#397CFC",
              fontFamily: "sans-serif",
              letterSpacing: ".5px",
              marginTop: "-5px",
              marginBottom: "0px",
              fontSize: "15px"
            }}
          >
            {props.author}
            <span style={{ color: "lightslategray", opacity: "70%" }}>
              {"  "}| {props.date}
            </span>
          </p>
          <div style={{}}>
            <p className="details">
              {props.desc}
              {/* <span>...</span> */}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
