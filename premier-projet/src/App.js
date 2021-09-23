import './App.scss';
import Article from './Article/Article';
import Contenu from './Contenu/Contenu';
import Footer from './Footer/Footer';
import Formulaire from './Formulaire/FormulaireV2';
import Menu from './Menu/Menu';


function App() {

  let article1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, aliquid qui neque, fugiat dolores cupiditate quae cumque nobis excepturi molestiae facere sunt libero odit reprehenderit tempore. Quisquam veritatis pariatur maiores?";
  let article2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus eum quae ab a eos minima illum ducimus harum, odit beatae.";
  let article3 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nobis iure, laudantium cupiditate iusto aliquam!";
  return (
    <div className="App">
      <Menu />
      <Contenu />
      <section>
        <Article title="Titre 1" content={article1} date="le 23/09/2021" author="Jeremy"/>
        <Article title="Titre 2" content={article2} date="le 22/09/2021" author="Maurice"/>
        <Article title="Titre 3" content={article3} date="le 21/09/2021" author="Alain"/>
      </section>
      <Formulaire />

      <Footer />
    </div>
  );
}

export default App;
