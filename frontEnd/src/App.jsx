import { useState } from 'react'
import './App.css'
import MainForm from './components/MainForm.jsx'

function App() {
  const [task, setTask] = useState([]);
  const onSubmitHandler = (e) => {
    try {
      e.preventDefault();
      alert("Task added successfully!");
      setTask('');
      console.log(task);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <MainForm>
        <h1 className='text-center py-12 text-3xl text-shadow-lg/20'>Do this do that</h1>
        <form className='flex w-[80%] mx-auto' onSubmit={onSubmitHandler}>
          <input type="text" placeholder='Enter your task here!' className='w-[80%] rounded-xl px-2 mx-2 shadow-xl outline-0'
          value={task}
          onChange={e => setTask(e.target.value)}/>
          <button className='bg-blue-600 p-4 rounded-4xl w-[15%] text-white cursor-pointer'>Add</button>
        </form>
      </MainForm>
    </>
  )
}

export default App
