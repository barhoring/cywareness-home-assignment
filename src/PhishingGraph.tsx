import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const endpoint = "http://candidate-test.cywareness.io/data";

const example_data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

interface IPhishingGraphProps {
  /* The http path that the form will be posted to */
  path: string;
  auth_token: string;
}

interface Idata {
  labels: string[];
  //   datasets: [
  //     {
  //       label: string;
  //       data: string[];
  //       backgroundColor: any[];
  //       borderColor: any[];
  //       borderWidth: number;
  //     }
  //   ];
  datasets: any[];
}

const response2data = (response: any) => {
  console.log("here");
  const keys = Object.keys(response);
  const values: string[] = Object.values(response);
  const len = values.length;
  const newData = {
    labels: keys,
    datasets: [
      {
        label: "phishong attacks",
        data: values,
        backgroundColor: Array(len).fill("rgba(255, 99, 132, 0.2)"),
        borderColor: Array(len).fill("rgba(255, 99, 132, 1)"),
        borderWidth: 1,
      },
    ],
  };
  return newData;
};

const PhishingGraph = (props: IPhishingGraphProps) => {
  const [response, setResponse] = useState<Idata | null>(null);
  const [data, setData] = useState<Idata | null>(null);
  useEffect(() => {
    fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${props.auth_token}`,
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        debugger;
        /*const data = {
          Jan: 10,
          Feb: 14,
          Mar: 5,
          Apr: 11,
          May: 1,
          Jun: 19,
          Jul: 22,
          Aug: 0,
          Sep: 3,
          Oct: 10,
          Nov: 11,
          Dec: 18,
        }; */
        const _data = response2data(res);
        setData(_data);
        console.log(_data);
      });
  }, []);

  return (
    <div>
      {props.auth_token}
      <p></p>Graph
      {data ? (
        <Bar
          data={data}
          width={1000}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      ) : null}
    </div>
  );
};

export default PhishingGraph;
