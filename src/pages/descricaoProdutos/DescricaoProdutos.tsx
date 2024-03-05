import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CardProduto from '../../components/produtos/cardProduto/CardProduto';

function DescricaoProdutos() {
  const location = useLocation();
  const produto = location.state?.produto;

  if (!produto) {
    return (
      <div>
        <Link to='/produtos'>Ver todos os produtos</Link>
      </div>
    );
  }

  return (
    <div>
      <button className='rounded mx-auto my-4 text-white bg-cyan-700 hover:bg-sky-600 w-1/6 py-2'>
        <Link to='/produtos'>Ver todos os produtos</Link>
      </button>
      <CardProduto produto={produto} exibirDetalhesCompletos />
    </div>
  );
}

export default DescricaoProdutos;