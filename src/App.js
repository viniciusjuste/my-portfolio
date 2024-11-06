import './App.css';
import './css/dark-theme.css';
import Header from './components/header';
import Main from './components/Main';
import Sobre from './components/about';
import Projetos from './components/projects';
import Skills from './components/skills';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Sobre />
      <Projetos />
      <Skills />
    </>
  );
}

export default App;
