import "./App.css";
import Header from "./components/Header";
import Meme from "./components/meme/Meme";

/**
 * Challenge:
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 */

function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
