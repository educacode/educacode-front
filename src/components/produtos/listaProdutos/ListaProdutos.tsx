import { useContext, useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";
import { visualizar } from "../../../services/Service";
import CardProduto from "../cardProduto/CardProduto";
import { Link } from "react-router-dom";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { handleLogout } = useContext(AuthContext);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      await visualizar('/produtos', setProdutos);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  return (
    <>
      <button className='rounded text-white bg-cyan-700 hover:bg-sky-600 w-1/6 py-2'>
        <Link to='/'>Retornar à página inicial</Link>
      </button>
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}

      </div>
    </>
  )
}

export default ListaProdutos;