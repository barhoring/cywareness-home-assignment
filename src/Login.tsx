import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
const endpoint = "http://candidate-test.cywareness.io/login";

interface ILoginProps {
  /* The http path that the form will be posted to */
  path: string;
  setAuthToken: (auto_token: string) => void;
}

const Login = (props: ILoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    console.log(username, password);
    // send a POST request
    const res = await axios({
      method: "post",
      url: endpoint,
      data: {
        username,
        password,
      },
    });
    const token = res.data.auth_token;
    props.setAuthToken(token);
    console.log(token);
    navigate(`/graph/`);
  };

  const onInputchange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    const name = event.target.name;
    if (name === "userName") setUsername(newValue);
    else if (name === "password") setPassword(newValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={username}
          onChange={onInputchange}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          id="passsword"
          name="password"
          value={password}
          onChange={onInputchange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
