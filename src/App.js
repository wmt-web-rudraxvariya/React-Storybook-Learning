import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Headers/Header";
import { Primary } from "./stories/Button.stories";
import { Image } from "@chakra-ui/image";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header>My App</Header>
        <Image src={logo} height="100px" alt="hello" />
        <Primary primary={true} label="Submit" />
      </header>
    </div>
  );
}

export default App;
