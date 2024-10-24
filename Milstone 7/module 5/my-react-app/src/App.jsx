import './App.css'
import Blogs from './Blogs'

function App() {

  return (
    <>
    <header className='w-11/12 mx-auto flex justify-between items-center pb-4 mb-4 border-b-2'>
    <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
    <img src="../src/assets/images/profile.png"  className='w-12'/>
    </header>
    <main className='w-11/12 mx-auto grid grid-cols-3'>
    <Blogs ></Blogs>
    <div className='border'><p>Lorem, ipsum.</p></div>
    </main>
    </>
  )
}

export default App
