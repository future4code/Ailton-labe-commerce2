import React from "react";
import styled from "styled-components";

class Filtro extends React.Component {
  render() {
    return (
      <div className="filtro">
        <h3>Filtros</h3>
        <div>
          <span>Valor mínimo</span>
          <br />
          <input type="number" />
        </div>
        <div>
          <span>Valor máximo</span>
          <br />
          <input type="number" />
        </div>
        <div>
          <span>Buscar nome</span>
          <br />
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default Filtro;
