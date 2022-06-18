import React from "react";
import "./App.css";
import styled from "styled-components";
import Filtro from "./components/filtro/filtro";
import Produtos from "./components/produtos/produtos";
import Carrinho from "./components/carrinho/carrinho";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <img src="https://uploaddeimagens.com.br/images/003/907/269/full/astro.png?1655503802" />
          <div>
            <h1>OutSpaceFit</h1>
            <h2> As melhores roupas espaciais</h2>
          </div>
        </header>
        <main>
          <Filtro />
          <Produtos />
          <Carrinho />
        </main>
        <footer>OutSpaceFit - Alguns direitos reservados</footer>
      </div>
    );
  }
}

export default App;
