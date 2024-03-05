import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import "@fontsource/quicksand";
import "@fontsource/exo";
import DescricaoProdutos from './pages/descricaoProdutos/DescricaoProdutos';


function App() {
  return (

    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        {/* para arrumar */}
        <Navbar />
        <div className="text-white bg-cyan-500">
          <div className='container mx-auto p-2 min-h-screen'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria/>} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/descricaoProdutos" element={<DescricaoProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;