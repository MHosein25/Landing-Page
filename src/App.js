import './App.css';
import Cards from './components/Cards';
import Headers from './components/Headers';
import Hero from './components/Hero';
import FormArea from './components/FormArea';

function App() {
  return (
    <div className="App">
      <div className='background'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#27282C" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,133.3C384,139,480,149,576,138.7C672,128,768,96,864,74.7C960,53,1056,43,1152,53.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>

      <Headers />
      <Hero />
      <FormArea />
      {/* <Hero /> */}
      {/* <div className='card-container'>
        <Cards title='Singing' desc='Asjo feeea feafief jifjeiajfi ihiuehgiu uhgeiuhg iuhf ge geag gr rgr ahrh rgea grgra gragar rgarg g rg raeg reagrg aegr ags g' />
      </div> */}
    </div>
  );
}

export default App;
