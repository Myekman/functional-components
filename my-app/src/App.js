import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <StatefulGreeting greeting="im a stateful class component" />
      <NavBarSimple />
    </div>
  );
}

export default App;