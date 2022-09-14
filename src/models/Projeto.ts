import User from './User';
import Tema from './Tema';

interface Projeto {
    id: number;
    apoios: string;
    nome: string;
    linkImagem: string;
    descricao: string;
    data: string;
    usuario?: User | null;
    tema?: Tema | null;
}

export default Projeto
