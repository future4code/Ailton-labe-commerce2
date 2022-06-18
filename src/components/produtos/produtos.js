import React from "react";
import styled from "styled-components";
import ProdutoCard from "./card_produto";

class Produtos extends React.Component {
  render() {
    return (
      <div className="produtos">
        <div class="header-main">
          <div>
            <strong>Ordenação: </strong>
            <select name="select">
              <option value="ordemCrescente">Crescente</option>
              <option value="ordemDecrescente">Decrescente</option>
            </select>
          </div>
          {/* <div>
            <strong>Quantidade de produtos: 4</strong>
          </div> */}
        </div>

        <div class="parte-produtos">
          <ProdutoCard
            LinkImg="https://www.jornaljoca.com.br/wp-content/uploads/2015/02/astronauta-apollo11-bdb01.jpg"
            NomeProduto="Kit Apollo 11"
            Preco="269,00"
          />
          <ProdutoCard
            LinkImg="https://ae01.alicdn.com/kf/HTB1VBk_IVXXXXX3aXXXq6xXFXXXV/Venda-quente-Espa-o-terno-mascote-traje-astronauta-mascote-traje-frete-gr-tis.jpg"
            NomeProduto="Traje Simple-But-Functional"
            Preco="109,00"
          />
          <ProdutoCard
            LinkImg="https://www.inovacaotecnologica.com.br/noticias/imagens/020130130108-roupa-espacial-z-1-nasa-1.jpg"
            NomeProduto="Traje Buzz Lightyear"
            Preco="219,00"
          />
          <ProdutoCard
            LinkImg="https://ae01.alicdn.com/kf/H27bd5f8248114e01a3bb8627e7c65decg/Reneecho-plus-size-traje-astronauta-para-homem-xxl-2021-nova-chegada-astronauta-terno-sliver-spacemen-macac.jpg_Q90.jpg_.webp"
            NomeProduto="Traje Laminado 44"
            Preco="79,00"
          />
          <ProdutoCard
            LinkImg="https://static1.disfrazzes.com/productos/disfraz-de-astronauta-para-hombre-80171.jpg"
            NomeProduto="Traje 55"
            Preco="189,00"
          />
          <ProdutoCard
            LinkImg="https://ae01.alicdn.com/kf/H53f5cc06aced4521a040cdd827505bcea/Reneecho-plus-size-traje-astronauta-para-homem-xxl-2021-nova-chegada-astronauta-terno-sliver-spacemen-macac.jpg_Q90.jpg_.webp"
            NomeProduto="Traje Foquete Aclopado"
            Preco="259,00"
          />
          <ProdutoCard
            LinkImg="https://http2.mlstatic.com/D_NQ_NP_927685-MLB48687728044_122021-O.webp"
            NomeProduto="Traje Rebaixado"
            Preco="199,00"
          />
          <ProdutoCard
            LinkImg="https://preview.free3d.com/img/2015/08/2374217469742023762/xhezeoy5-900.jpg"
            NomeProduto="Traje Old but Gold"
            Preco="159,00"
          />
          <ProdutoCard
            LinkImg="https://i.ebayimg.com/thumbs/images/g/THsAAOSwMxtbPCAZ/s-l300.jpg"
            NomeProduto="Kit Tudão"
            Preco="209,00"
          />
        </div>
      </div>
    );
  }
}

export default Produtos;
