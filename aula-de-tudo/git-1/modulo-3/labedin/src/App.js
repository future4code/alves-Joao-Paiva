import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Joao Pedro Paiva" 
          descricao="Oi, eu sou o João Pedro. Sou o chefe dos estagiarios do curso de Medicina Veterinária. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/56/56747.png" 
          texto="Ver mais"
        />
      </div>
      <div>
      <CardPequeno 
      imagem="https://as1.ftcdn.net/v2/jpg/02/73/74/34/1000_F_273743445_8NsO173YKt3qKssAjPPGDLj4TcUlBsNA.jpg"
      email="Email:"
      descricao="paivapedro16.pp@gmail.com"

      />
      <CardPequeno 
      imagem="https://cdn-icons-png.flaticon.com/512/6043/6043857.png"
      email="Endereço:"
      descricao="Rua dos Alfineiros, nº4"
      
      />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
