import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    if (params.type) {
      getCuisine(params.type);
    }
  }, [params.type]);

  return (
    <Container>
      <Row>
        {cuisine && cuisine.length > 0 ? (
          cuisine.map((item) => (
            <Col key={item.id} xs={12} md={4} lg={3}>
              <Card>
                <Card.Img src={item.image} alt="" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Row>
    </Container>
  );
};

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 40px auto;
  gap: 1rem;
`;

const RecipeCard = styled.div`
  flex-basis: 20%;
  img {
    width: 100%;
    height: 200px;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;