import './App.css'
import WelcomeMessage from './WelcomeMessage'
import AccordionBasic from './components/Accordion_basic'
import AccordionSingleActive from './components/Accordion_Single_Active'
import Counter from './components/Counter'
import ToggleSwitch from './components/ToggleSwitch'

function App() {

  return (
    <>
      <WelcomeMessage title="Hello from WelcomeMessage component!" />
      <hr />
      <Counter></Counter>
      <hr />
      <ToggleSwitch></ToggleSwitch>
      <hr />
      <AccordionBasic></AccordionBasic>
      <hr />
      <AccordionSingleActive></AccordionSingleActive>
      <hr />
    </>
  )
}

export default App
