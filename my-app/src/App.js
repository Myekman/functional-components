import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <StatefulGreeting greeting="im a stateful class component" />
    </div>
  );
}

export default App;