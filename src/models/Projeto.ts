import User from './User';

interface Projeto {
    id: number;
    nome: string;
    linkImagem: string;
    descricao: string;
    user?: User | null;

}

export default Projeto