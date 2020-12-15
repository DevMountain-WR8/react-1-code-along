//To render a component, it has to be imported from it's file path
import ClassComponent from './Components/ClassComponent';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Components are rendered as void tags */}
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
