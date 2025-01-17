import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() =>{
    getVeggie();
  }, []);

  const getVeggie = async () => {
    
    const check = localStorage.getItem('veggie');

    if(check){
      setVeggie (JSON.parse(check));
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };


  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Choices</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Title>{recipe.title}</Title>
                <img src={recipe.image} alt={recipe.title}/>
                <Gradient/>
              </Card>
            </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const Title = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  z-index: 1;
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.5));
`

export default Veggie;