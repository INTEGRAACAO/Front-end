import User from './User';
import Comentario from './Comentario';

interface Projeto {
    id: number;
    apoios: string;
    nome: string;
    linkImagem: string;
    descricao: string;
    data: string;
    usuario?: User | null;
    comentario?: Comentario | null
}

export default Projeto