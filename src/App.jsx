import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
      <TimeChallenge title="Easy" targetTime={1}/>
      <TimeChallenge title="Not easy" targetTime={5}/>
      <TimeChallenge title="Getting though" targetTime={10}/>
      <TimeChallenge title="Pro's only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
