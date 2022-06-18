import React from "react";
import styled from "styled-components";

class ProdutoCard extends React.Component {
  render() {
    return (
      <div class="div-produtos">
        <img src={this.props.LinkImg} className="img_produto"></img>
        <p>{this.props.NomeProduto}</p>
        <p>R$:{this.props.Preco}</p>
        <button>Adicionar ao carrinho</button>
      </div>
    );
  }
}

export default ProdutoCard;
