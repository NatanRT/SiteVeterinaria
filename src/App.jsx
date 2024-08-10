import React from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import Secao from "./components/Secao/Secao";
import Cartao from "./components/Cartao/Cartao";
import Titulo from "./components/Titulo/Titulo";
import Formulario from "./components/Formulario/Formulario";
import Footer from "./components/Footer/Footer";

const App = () => {

  const campos = [   // comeca com [ (colchete) pq é um vetor
    { // começo do objeto
      nome: "Nome completo",
      id: "nome",
      tipo: "text",
    },
    {
      nome: "Email válido",
      id: "email",
      tipo: "email",
    },
    {
      nome: "Telefone com DDD",
      id: "fone",
      tipo: "number",
    },
    {
      nome: "Deixe seu recado",
      id: "recado",
      tipo: "text",
    },

  ]
  return (
    <div>
      <Header />
      <Menu />
      <Secao>
        <img src="src/assets/imagem.png"></img>
      </Secao>
      <Secao>
        <Titulo texto="Serviços" />
        <Cartao
          descricao="Um texto descritivo"
          imagem="#"
          titulo="Um LOGO BEM GRANDE"
        />
        <Cartao descricao="LOREN IPSUN" imagem="#" titulo="Um TITULO" />
      </Secao>
      <Secao>
        <Titulo texto="Contato" />
        <Formulario campos={campos} />
      </Secao>
      <Footer/>
    </div>
  );
};
export default App;
