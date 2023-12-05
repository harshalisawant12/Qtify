function MenuItem() {
  return <div
    style={{
      height: "120px",
      display: "flex",
      width: "100%",
      border: "2px solid blue",
    }}
  >
    <div
      style={{
        width: "120px",
        height: "100%",
        border: "2px solid yellow",
      }}
    ></div>
    <div
      style={{
        flex: 1,
        border: "2px solid orange",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
      }}
    >
      <p>Album Name</p>
      <p style={{ fontSize: "12px" }}>
        Album Name knk, knk knk knkn knk knk knnk nl nl
      </p>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: "100%",
        border: "2px solid yellow",
        color: "white",
      }}
    >
      100 follows
    </div>
  </div>;
}

export default ({data}) => {
  return (
    <div
      style={{
    
        position: `absolute`,

        width: "569px",
        maxHeight: "500px",
        border: "5px solid red",
        overflowY: "auto",
        top: "74px",
        backgroundColor: "black",
      }}
    >
      {data.map(n => <MenuItem />)}
    </div>
  );
};
