import './App.css';
import Alerts from './Components/Alerts/Alerts';
import MuiAvatar from './Components/Avatar/Avatar';
import MuiButton from './Components/Buttons/Button';
import Cards from './Components/Cards/Cards';
import Chips from './Components/Chips/Chips';

function App() {
  return (
    <div className="App">
      <h1>CHIP</h1>
      <Chips />
      <hr />
      <h1>CARD</h1>
      <Cards />
      <hr />
      <h1>ALERTS</h1>
      <Alerts />
      <hr />
      <h1>AVATAR</h1>
      <MuiAvatar />
      <hr />
      <h1>BUTTON</h1>
      <MuiButton />
    </div>
  );
}

export default App;
