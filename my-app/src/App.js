import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <StatefulGreeting greeting="im a stateful class component" />
      <NavBarSimple />
      <EventClass />
      <EventFunctional />

      <ConditionalRenderingFunctional connected = {true}/>
      <ConditionalRenderingClass />
      <NestingComponents /> 
      <MethodsAsPropsParent />
 
    </div>
  );
}

export default App;