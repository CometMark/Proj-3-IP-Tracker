import { useContext } from "react";
import Enterip from './Pages/Enterip';
import Map from "./Components/map";
import {DataContext} from "./context/data-context";
import './App.css';


function App() {
  const {data,setData}=useContext(DataContext);

  return (
    <div className="App">
      <header className="App-header">
        <Enterip />
      </header>
      <div className="map_embed" >
        <Map  lat={data.location.lat} lng={data.location.lng}  />
        </div>
    </div>
  );
}

export default App;
