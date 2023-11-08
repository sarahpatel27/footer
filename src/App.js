import './App.css';
import Footer from './components/Footer';
import YellowBanner from './components/YellowBanner';

function App() {

  const head = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.')
  const yellowpara=('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam. ')
  return (
    <div className="App">
      <YellowBanner havePara={true} heading={head} p={yellowpara}  />
      <Footer />
    </div>
  );
}

export default App;
