import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  conteudo: string;
  quantidade: number;
  preco: number;
  foto: string;
  categoria?: Categoria | null;
  usuario?: Usuario | null;
}