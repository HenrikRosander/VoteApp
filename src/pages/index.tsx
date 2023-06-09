import Head from "next/head";
import Card from "../components/card";
import Hero from "../components/Hero/Hero";
import { BigCardContainer } from "../index.styles";
import { useEffect, useState } from "react";
import { TripSuggestion } from "@/types/TripSuggestion";

export default function Home() {
  const [testFetch, setTestFetch] = useState<TripSuggestion[]>();
  useEffect(() => {
    fetch("http://localhost:3001/db").then((res) => {
      res.json().then((data: TripSuggestion[]) => {
        setTestFetch(data);
        console.log(data);
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <BigCardContainer>
        {testFetch?.map((data) => {
          return <Card tripSuggestion={data} key={data._id} />;
        })}
      </BigCardContainer>
    </>
  );
}
