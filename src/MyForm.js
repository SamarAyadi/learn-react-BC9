import { useState } from "react";

function MyForm() {
  // const [nameInput, setNameInput] = useState("");
  // const [emailInput, setEmailInput] = useState("");

  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    isStudent: false,
    country: "",
    status: ""
  });

  function handleCheckBoxChanged(event) {
    setFormInputs({ ...formInputs, isStudent: event.target.checked });
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formInputs);
      }}
    >
      <label>Name:</label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          setFormInputs({ ...formInputs, name: event.target.value });
        }}
      />
      <hr />

      <label>Email:</label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          setFormInputs({ ...formInputs, email: event.target.value });
        }}
      />
      <hr />

      <label>Age:</label>
      <input
        value={formInputs.age}
        onChange={(event) => {
          setFormInputs({
            ...formInputs,
            age: event.target.value,
          });
        }}
      />

      <hr />

      <label>Are you Student</label>
      <input
        type="checkbox"
        checked={formInputs.isStudent}
        onChange={handleCheckBoxChanged}
      />

      <hr />

      <select
        value={formInputs.country}
        onChange={(event) => {
          setFormInputs({ ...formInputs, country: event.target.value });
        }}>
        <option>Tunis</option>
        <option>Palestine</option>
        <option>Gaza</option>
      </select>
      <hr />
      <input type="radio"
        value="student"
        name="status"
        checked={formInputs.status == "student"} 
       onChange={(event) => {
          setFormInputs({ ...formInputs, status: event.target.value });
      }} 
        />
      Student


      
      <input
        value="teacher"
        type="radio"
        name="status"
        checked={formInputs.status == "teacher"}
        onChange={(event) => {
          setFormInputs({ ...formInputs, status: event.target.value });
        }} />
       Teacher
      <hr />

      <label>Genearl Information</label>
      <textarea
        value={formInputs.generalInfo}
        onChange={(event) => {
          setFormInputs({ ...formInputs, generalInfo: event.target.value });
        }}
      />

      <button>Submit</button>
    </form>
  );
}

export default MyForm;
