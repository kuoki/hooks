import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "lear",
    email: "le@r.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(() => {
    // console.log("useEffect Go");
  }, []);

  useEffect(() => {
    // console.log("useEffect cambio");
  }, [formState]);

  useEffect(() => {
    // console.log("email cambio");
  }, [email]);



  return (
    <>
      <h1>Simple form</h1>
      <hr />

      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

    {
        username === "lear" && <Message />
    }
    </>
  );
};
