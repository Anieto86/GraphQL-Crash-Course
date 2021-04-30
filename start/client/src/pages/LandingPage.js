import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";

import { useQuery, gql } from "@apollo/client";

const ANIMAL_QUERY = gql`
  {
    animals {
      title
      image
      id
      price
      slug
      image
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(ANIMAL_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  console.log({ data });

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
    </div>
  );
}

export default LandingPage;
