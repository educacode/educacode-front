// CardProduto.jsx
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import Produto from '../../../models/Produto';
import { AuthContext } from '../../../contexts/AuthContext';
import BotoesEditarDeletar from '../../buttons/Buttons';


interface CardProdutoProps {
  produto: Produto;
  exibirDetalhesCompletos?: boolean;
}

function CardProduto({ produto, exibirDetalhesCompletos }: CardProdutoProps) {
  const { usuario } = useContext(AuthContext);

  return (
    <div className='border-slate-900 bg-sky-800 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-sky-600 py-2 px-4 items-center gap-4">
          <img src={produto.usuario?.foto} className='h-8 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center'>Produto cadastrado por: {produto.usuario?.nome}</h3>
        </div>
        <div className='p-4'>
          <img src={produto.foto} alt={produto.nome} className='w-full h-20 object-contain mb-4 rounded-md' />

          <h4 className='text-xl font-semibold uppercase'>{produto.nome}</h4>

          <p className=''>Categoria: {produto.categoria?.tipo}</p>
          {exibirDetalhesCompletos && (
            <>
              <p>Descrição: {produto.descricao}</p>
              <p>Conteúdo: {produto.conteudo}</p>
              <p>Quantidade disponível: {produto.quantidade}</p>
            </>
          )}
          <p>Preço: R$ {produto.preco}</p>
          {!exibirDetalhesCompletos && (
            <Link to="/DescricaoProdutos" className='text-lg hover:border-cyan-950 border-b-2 text-cyan-200' state={{ produto }}>
              Saiba mais
            </Link>
          )}

        </div>
      </div>
      <div className="flex">
        {usuario.token !== "" && <BotoesEditarDeletar id={produto.id} />}
      </div>
    </div>
  );
}

export default CardProduto;