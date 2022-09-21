import User from '../../../models/User';
interface ComentariosProps{
    conteudo: string,
    imagem: string,
    nome: string,
}

function Comentarios({ conteudo, imagem, nome }: ComentariosProps) {
  const d= new Date();
  let dataAtual = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}`;

  if (conteudo != ""){
    return (
      <div className="campoComentario" >
        <img src={imagem} alt="" />
        <div className="textoData" >
          <h5> {nome} </h5>
          <p className="mensagem"> {conteudo} </p>
          <p className="dataAtual">{dataAtual}</p>
        </div>
      </div>
    )
  } else {
    return (null)
  }
}

export default Comentarios
