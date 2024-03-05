import React from 'react';
import { Link } from 'react-router-dom';

function BotoesEditarDeletar({ id }) {
  return (
    <>
      <Link to={`/editarProduto/${id}`} className='w-full text-white bg-emerald-600 hover:bg-emerald-900 flex items-center justify-center py-2'>
        <button>Editar</button>
      </Link>
      <Link to={`/deletarProduto/${id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
        <button>Deletar</button>
      </Link>
    </>
  );
}

export default BotoesEditarDeletar;