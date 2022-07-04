import { useState } from "react";

function Post(props) {
  // Passo5
 const [Curtida, setCurti] = useState(0)
 const [Comentario, setComentario] = useState(0)
 const [inputComentario, setInputComentario] = useState("")
 const [arrayComentarios, setAdicionarComentario] = useState([])

  // Passo7
  const onClickCurtida = () => {
    if(Curtida === 0) {
      setCurti(Curtida + 1)
    }
    else {
      setCurti(Curtida - 1)
    }
  };

  // Passo7
  const onClickComentario = () => {
   if(Comentario === 0) {
    setComentario(Comentario + 1)
   }
   else setComentario(Comentario - 1)
  };

  // Passo7
  const onChangeComentario = (event) => {
   setInputComentario(event.target.value)

  // Passo7
  const enviarComentario = (comentario) => {
    setAdicionarComentario([...arrayComentarios, comentario])
  };

  {/* Passo6 */}
  const caixaDeComentario = Comentario >= 1 ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input onChange={OnChangeComentario}
        id={"comentario"}
        value={inputComentario}
      />
      {/* Passo4 */}
      <button onClick={()=>enviarComentario()} >Enviar</button>
    </>
  ) : (
    // Passo8
    <>Lógica de exibir lista de comentarios</>
    // this.state.comentarios.map((comentario, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{comentario}</p>
    //     </div>
    //   )
    // })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={"https://picsum.photos/50/50"} alt={'Imagem do usuario'} />
          <span>Joao Pedro Paiva</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={"https://picsum.photos/200/150"} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: 0</span>
          {/* Passo4 */}
          <button >
            {/* Passo6 */}
            {true ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: 0</span>
          {/* Passo4 */}
          <button >
            {/* Passo6 */}
            {false ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};
}
export default Post;