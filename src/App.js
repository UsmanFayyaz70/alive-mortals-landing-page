import './App.css';
import Screen from './components/screen';
import sample from './assets/sample.png'

function App() {
  return (
    <div style={{
      padding: "15px",
      height: "95vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      background: "black"
    }}>
      <div
        className="App"
        style={{ backgroundImage: `url(${sample})` }}
      >

        <Screen />

      </div>
    </div>
  );
}

export default App;
