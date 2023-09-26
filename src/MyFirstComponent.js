function MyFirstComponent() {
  const person = {
    name: "Samar",
    email: "we@lota.me",
  };
  return (
    <>
      <div>
        <h1>{person.name}</h1>
        <h3>{person.email}</h3>
        <h2>hi</h2>
        <button>Click Me</button>
      </div>
      <div></div>
    </>
  );
}

export default MyFirstComponent;
