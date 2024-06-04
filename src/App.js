import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pages from "./pages/Pages";
import Category from './components/Category';
import {BrowserRouter} from 'react-router-dom';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { GiForkKnifeSpoon } from 'react-icons/gi';
//import Search from "./components/Search"

function App() {
  return (
    <BrowserRouter>
    <Nav>
      <GiForkKnifeSpoon/>
      <Logo to={"/"}>Recipe Site</Logo><Logo/>
    </Nav>
      <Category/>
      <Pages/>
    </BrowserRouter>
  );
}

const Logo = styled (Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobstaer Two', cursive;
  color: #000;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
