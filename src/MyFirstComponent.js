import "./MyFirstComponent.css";
function MyFirstComponent() {
  const person = {
    name: "Pingu",
    email: "we@lota.me",
  };

  const elemStyle = {
    backgroundColor: "red",
    fontSize: "20px",
    boxShadow: "0px 20px 10px black",
  };
  return (
    <>
      <div>
        <h1
          style={{
            backgroundColor: "blue",
            fontSize: "20px",
            boxShadow: "0px 20px 10px black",
          }}
        >
          {person.name}
        </h1>
        <h3 className={"active redBg "}>{person.email}</h3>
        <h2 className={"active"} style={elemStyle}>
          hi
        </h2>
        <button onClick={sayHello}>Click Me</button>
        <h1 className={person.name == "Samar" ? "redBg" : "greenBg"}>Check Name</h1>
      </div>
      <div></div>
    </>
  );
}

function sayHello() {
  alert("Hello");
}

export default MyFirstComponent;
