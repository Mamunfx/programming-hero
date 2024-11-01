import './App.css'
import HookForm from './components/HookForm'
import RefForm from './components/RefForm'
import SimpleForm from './components/SimpleForm'
import StatefulForm from './components/StatefulForm'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <SimpleForm></SimpleForm>
      <StatefulForm></StatefulForm>
      <RefForm></RefForm>
      <HookForm></HookForm>
    </>
  )
}

export default App
