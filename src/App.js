import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './App.css';
import './css/dark-theme.css';
import './css/mobile.css';
import Header from './components/header';
import Main from './components/main';
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
