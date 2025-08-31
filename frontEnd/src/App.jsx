import { useState } from 'react'
import './App.css'
import MainForm from './components/MainForm.jsx'

// id for task
  let id = 0

function App() {
  // state to show task
  const [showTask, setShowTask] = useState('');
  // state to save task
  const [tasks, setTasks] = useState([]);
  // on submit handler
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      alert("Task added successfully!");
      setTasks([
        ...tasks, {id: id++, task: showTask}
      ]);
      console.log(tasks.id)
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
          value={showTask}
          onChange={e => {setShowTask(e.target.value)}}/>
          <button className='bg-blue-600 p-4 rounded-4xl w-[15%] text-white cursor-pointer'>Add</button>
        </form>
        { tasks.map(task => (
          <h3 key={task.id} className='m-auto'>{task.task}</h3>
        ))}
      </MainForm>
    </>
  )
}

export default App
