import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useQuiz, deleteQuestion, startQuiz } from './redux/quiz'
import { Link, Route, Routes } from "react-router-dom"


// components
import Add from './components/Add'
import Update from "./components/Update"
import Quiz from "./components/Quiz"
import Delete from './components/Delete'
import Admin from './components/Admin'

function App() {
  
  const { questions, quizStarted, showResult } = useQuiz()

  return ( 
    
      <div>

        <div>  
          <Link className= "adminquiz" to="/admin">Admin</Link>
          <Link className= "adminquiz" to="/quiz">Quiz</Link> 
        </div>
              
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
        
      </div>
    
  )
}

export default App


/* {quizStarted ?
  <div className='flex-col'>
    <h1>QUIZ</h1>
    <Quiz></Quiz>
  </div>
  : <button onClick={startQuiz}>Start QUIZ</button>
}
{showResult ? <div>SHOWRESULT</div> : null}


<div className='height'></div> */


/*   const showResult = true
  function renderPart() {
    if(showResult){
      return <h2>showResult</h2>
    } else if(quizStarted) {
      return <h2>quizStarted</h2>
    } else return <button>Starta Quiz</button>


    {renderPart()}
  } */