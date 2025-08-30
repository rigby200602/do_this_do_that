import './App.css'
import MainForm from './components/MainForm.jsx'

function App() {

  return (
    <>
      <MainForm>
        <h1 className='text-center py-12 text-3xl'>Do this do that</h1>
        <div className='flex w-[80%] mx-auto'>
          <input type="text" placeholder='Enter your task here!' className='w-[80%] rounded-xl px-2 mx-2 shadow-xl outline-0'/>
          <button className='bg-blue-600 p-4 rounded-4xl w-[15%] text-white cursor-pointer'>Add</button>
        </div>
      </MainForm>
    </>
  )
}

export default App
