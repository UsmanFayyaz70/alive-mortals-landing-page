import './App.css';
import Screen from './components/screen';
import sample from './assets/sample.png'
import { Col, Row } from 'antd';
function App() {
  return (
    <div style={{
      padding: "25px",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      background: "black"
    }}>
      <div
        className="App"
        style={{ backgroundImage: `url(${sample})` }}>

        <Screen />

      </div>
    </div>
  );
}

export default App;
