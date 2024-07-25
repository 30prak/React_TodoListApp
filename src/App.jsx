import './App.css'
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './TodoList'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <div>
        <CssBaseline/>
        {/* <h1>Todos</h1> */}
        <Navbar/>
        <TodoList/>
      </div>
    </>
  )
}

export default App;


// todos
// [
//   {id: , text: , completed: }
// ]