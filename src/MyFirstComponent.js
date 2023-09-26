function MyFirstComponent() {
  const person = {
    name: "Samar",
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
        <h3 style={{ backgroundColor: "green" }}>{person.email}</h3>
        <h2 style={elemStyle}>hi</h2>
        <button onClick={sayHello}>Click Me</button>
      </div>
      <div></div>
    </>
  );
}

function sayHello() {
  alert("Hello");
}

export default MyFirstComponent;
