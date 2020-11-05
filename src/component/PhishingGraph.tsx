import React, { useEffect, useState } from "react";
import { HorizontalBar } from "react-chartjs-2";

const endpoint = "http://candidate-test.cywareness.io/data";

interface IPhishingGraphProps {
  path: string;
  auth_token: string;
}

interface Idata {
  labels: string[];
  datasets: {
    label: string;
    data: string[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

const response2data = (response: any) => {
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
      <h1>Phishing Graph</h1>
      {data ? (
        <HorizontalBar
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
