import './App.css'
import HookForm from './components/HookForm'
import Grandpa from './components/nestedComponents/Grandpa'
import RefForm from './components/RefForm'
import ReusableForm from './components/ReusableForm'
import SimpleForm from './components/SimpleForm'
import StatefulForm from './components/StatefulForm'

function App() {
  const handleSingUp=data=>{
    console.log('sing up data :',data);
    
  }
  const handleUpdateData=data=>{
    console.log('Update data :',data);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <SimpleForm></SimpleForm>
      <StatefulForm></StatefulForm>
      <RefForm></RefForm>
      <HookForm></HookForm>
      <ReusableForm title={'Sing up'} submitBtn={'Submit'} handleFormEvent={handleSingUp}>
      <h1>Sing up right now</h1>
      </ReusableForm>
      <ReusableForm title={'Update Profile'} submitBtn={'Update'} handleFormEvent={handleUpdateData}>
      <h1>update data right now</h1>
      </ReusableForm>

      <Grandpa></Grandpa>
    </>
  )
}

export default App
