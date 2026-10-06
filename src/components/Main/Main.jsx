import "./Main.css";
import ServicoCard from "../ServicoCard/ServicoCard";

const servicos = [
  {id: 1, icone: "🤮", titulo: "Design de interfaces", descricao: "Telas claras pensadas para o usuário"},
  {id: 2, icone: "💖", titulo: "Responsividade", descricao: "O mesmo site em qualquer lugar"},
  {id: 3, icone: "🤑", titulo: "Performance", descricao: "Páginas leves que carregam rápido"},
]
function Main() {  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layouts responsivos, rapidos e acessiveis para o seu negocio crescer
          na web.
        </p>
        <div className="hero-buttons">
          <a href="#orçamento" className="btn-primary">
            Peça um orçamento
          </a>
          <a href="#portfolio" className="btn-secondary">
            Ver portfólio
          </a>
        </div>
      </section>
      <section className="servico">
        <h2>Nossos serviços</h2>

        <div className="servicos-grid">
          {servicos.map((servico)=> (
           <ServicoCard key={servico.id} icone={servico.icone} titulo={servico.titulo} descricao={servico.descricao}/>   
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
