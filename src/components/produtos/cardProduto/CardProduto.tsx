import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-sky-600 py-2 px-4 items-center gap-4">
          <img src={produto.usuario?.foto} className='h-8 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center'>Produto cadastrado por: {produto.usuario?.nome}</h3>
        </div>
        <div className='p-4'>
          <img src={produto.foto} alt={produto.nome} className='w-full h-20 object-contain mb-4 rounded-md' />

          <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
          <p>{produto.descricao}</p>
          <p className=''>Categoria: {produto.categoria?.tipo}</p>
          <p>Conteúdo: {produto.conteudo}</p>
          <p>Preço: R$ {produto.preco}</p>
        </div>
      </div>
      <div className="flex">
        <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-sky-600 hover:bg-sky-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;