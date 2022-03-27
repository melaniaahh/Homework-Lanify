import logo from './logo.svg';
import data from "./data";
import Track from "./components/Track";

function App() {
  return (
    <section>
      <div className="container">
        {data.map((track) => (
          <Track url={track.album.images[0].url} title={track.album.name} artists={track.artists[0].name} />
        ))}
      </div>
    </section>
  );
}

export default App;