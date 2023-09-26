import logo from "./logo.svg";
import "./App.css";

function App() {
  const tasks = [
    { id: 1, title: "Doing my Homeworks" },
    { id: 2, title: "Reding a book" },
    { id: 3, title: "Studying" },
    { id: 4, title: "Cleaning my Room" },
    { id: 5, title: "Learn React" },
  ];
  const myTasksList = tasks.map((task) => {
    return (
      <li style={{ background: "green" }} key={task.id}>
        <h1>{task.title}</h1>
      </li>
    );
  });

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ul>{myTasksList}</ul>
        </div>
      </header>
    </div>
  );
}

export default App;
