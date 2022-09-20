import User from './User';
import Tema from './Tema';

interface Projeto {
    id: number;
    apoios: string;
    nome: string;
    linkImagem: string;
    descricao: string;
    dataProjeto: string;
    usuario?: User | null;
    temas?: Tema | null;
}

export default Projeto
