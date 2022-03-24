import logo from './logo.svg';
import data from "./data";
import Track from "./components/Track";

function App() {
  return (
    <section>
      <div className="container">
        <Track url={data.album.images[0].url} title={data.album.name} artists={data.artists[0].name} />
      </div>
    </section>
  );
}

export default App;