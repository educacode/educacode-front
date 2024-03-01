import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";
import { toastAlert } from "../../../utils/ToastAlert";
import { buscar } from "../../../services/Service";
import { Dna } from "react-loader-spinner";
import CardProduto from "../cardProduto/CardProduto";

function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    let navigate = useNavigate();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
          toastAlert('Você precisa estar logado', 'info');
          navigate('/');
        }
      }, [token]);

      async function buscarProdutos() {
        try {
          await buscar('/produtos', setProdutos, {
            headers: {
              Authorization: token,
            },
          });
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('O token expirou, favor logar novamente')
            handleLogout()
          }
        }
      }
    
      useEffect(() => {
        buscarProdutos();
      }, [produtos.length]);
    

  return (
    <>
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  )
}

export default ListaProdutos
