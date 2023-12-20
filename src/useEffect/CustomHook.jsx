import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";


export const CustomHook = () => {

  const { formState, onInputChange,onResetForm, password, username, email } = useForm({
    username: "",
    email: "",
    password: "",
 
  });

  // const {email, username,password} = formState;

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
      <h1>Simple form with custom hook</h1>
      <hr />

      <input
        type="text"
        placeholder="Usuario"
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
      <input
        type="password"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={ onResetForm }>Reset</button>


    </>
  );
};
