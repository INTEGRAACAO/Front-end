import axios from "axios";

export const api = axios.create({
    baseURL: 'https://gen-integraacao.herokuapp.com/'
})

export const cadastroUsuario = async(url:any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url:any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

export const buscaId = async(url: any,setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setDado(resposta.data)
}
