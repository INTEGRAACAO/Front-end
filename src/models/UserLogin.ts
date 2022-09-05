interface UserLogin {
    id: 0;
    nome:string;
    apelido:string;
    linkFoto: string;
    senha: string;
    token?: string | null;
    email: string;
}


export default UserLogin;