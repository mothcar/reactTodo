import InlineCompoenet from "./components/InlineComponent";
import OutsideComponent from "./components/OutlineComponent";
import Todo from "./components/Todo";

function App() {
  return <div className="">
    {/* <Todo/> */}
    <InlineCompoenet/>
    <OutsideComponent/>
  </div>;
}

export default App;
