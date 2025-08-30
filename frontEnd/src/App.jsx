import './App.css'
import MainForm from './components/MainForm.jsx'

function App() {

  return (
    <>
      <MainForm>
        <div className='w-full'>
          <h1 className='text-center'>Do this do that</h1>
        </div>
        <div className='flex w-[80%] mx-auto'>
          <input type="text" placeholder='Enter your task here!' className='w-[80%] rounded-xl px-2 mx-2'/>
          <button className='bg-blue-600 p-4 rounded-4xl w-[15%]'>Add</button>
        </div>
      </MainForm>
    </>
  )
}

export default App
