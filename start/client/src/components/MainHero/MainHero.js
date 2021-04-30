import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";

import { useQuery, gql } from "@apollo/client";

const CARD_FETCH = gql`
  {
    mainCards {
      image
      title
    }
  }
`;

function MainHero() {
  const { loading, error, data } = useQuery(CARD_FETCH);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  console.log(data);
  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} alt="rhino" />
        </div>
        <div className="cards-container">
          {data.mainCards.map((card) => {
            return (
              <div className="card">
                <h3>{card.title}</h3>
                <img
                  src={animals[card.image]}
                  style={{ width: "100%" }}
                  alt="animals img"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
