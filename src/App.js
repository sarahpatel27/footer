import './App.css';
import Footer from './components/Footer/Footer';
import MainBanner from './components/Main Banner/MainBanner';
import YellowBanner from './components/Yellow Banner/YellowBanner';
import mb1 from './assets/Property 1=mb_1.png'

function App() {

  const head = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.')
  const para=('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam. ')
  return (
    <div className="App">
      <MainBanner img={mb1} havePara={true} heading={head} para={para}/>
      <YellowBanner havePara={true} heading={head} para={para} />
      <Footer />
    </div>
  );
}

export default App;
