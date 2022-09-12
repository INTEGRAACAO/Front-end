import User from './User';

interface Projeto {
    id: number;
    apoios: string;
    nome: string;
    linkImagem: string;
    descricao: string;
    data: string;
    user?: User | null;
    //comentario?: Comentario | null
}

export default Projeto