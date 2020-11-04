import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const endpoint = "http://candidate-test.cywareness.io/data";

interface IPhishingGraphProps {
  /* The http path that the form will be posted to */
  path: string;
  auth_token: string;
}

const PhishingGraph = (props: IPhishingGraphProps) => {
  useEffect(() => {
    fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${props.auth_token}`,
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((response) => console.log(response));
  }, []);

  return (
    <div>
      {props.auth_token}
      <p></p>Graph
    </div>
  );
};

export default PhishingGraph;
