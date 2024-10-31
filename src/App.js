import './App.css';
import './css/dark-theme.css';
import Header from './components/header';
import Main from './components/Main';
import Sobre from './components/about';
import Projetos from './components/projects';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Sobre />
      <Projetos />
    </>
  );
}

export default App;
