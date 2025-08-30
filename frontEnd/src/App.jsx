import './App.css'
import MainForm from './components/MainForm.jsx'

function App() {

  return (
    <>
      <MainForm>
        <h1 className='text-center py-12'>Do this do that</h1>
        <div className='flex w-[80%] mx-auto'>
          <input type="text" placeholder='Enter your task here!' className='w-[80%] rounded-xl px-2 mx-2'/>
          <button className='bg-blue-600 p-4 rounded-4xl w-[15%] text-white'>Add</button>
        </div>
      </MainForm>
    </>
  )
}

export default App
