import React, { useState } from "react";

const App = () => {
  const [fullname, setFullname] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
  });



  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullname((preValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          mobile: preValue.mobile,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          mobile: preValue.mobile,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          mobile: preValue.mobile,
        };
      } else if (name === "number") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          mobile: value
        };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  let mail = "mailto:" + fullname.email;

  return (
    <>
      <div>
        <form>
          <h1>
            Hello {fullname.fname} {fullname.lname}!
          </h1>
          <p>
            <a href={mail} target="_blank">
              {fullname.email}
            </a>
          </p>
            <p>{fullname.mobile}</p>

          <input
            type="text"
            placeholder="Your first name here"
            onChange={inputEvent}
            name="fName"
            value={fullname.fname}
          />
          <input
            type="text"
            placeholder="Your last name here"
            onChange={inputEvent}
            name="lName"
            value={fullname.lname}
          />
          <input
            type="email"
            placeholder="Your email here"
            onChange={inputEvent}
            name="email"
            value={fullname.email}
          />
          <input
            type="number"
            placeholder="Your number here"
            onChange={inputEvent}
            name="number"
            value={fullname.mobile}
          />
          <button onClick={onSubmit}> Click Here</button>
        </form>
      </div>
    </>
  );
};

export default App;
