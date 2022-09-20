interface ComentariosProps{
    conteudo: string
}

function Comentarios({ conteudo }: ComentariosProps) {
  return (
    <p className="conteudo-comentario">{conteudo}</p>
  )
}

export default Comentarios