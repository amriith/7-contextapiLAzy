
import { Route, BrowserRouter , Routes, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard =  React.lazy(() => import ('./components/Dashboard'))
const Landing = React.lazy(() => import ('./components/landing'))

function App() {

  return (
    
   <BrowserRouter>
   <Appbar/>
   <Routes>
    <Route path="/Dashboard" element ={<Dashboard /> } />
    <Route path="/" element= {<Landing   /> } />
   </Routes>
   </BrowserRouter>
   
  )
}

function Appbar(){
  const navigate  = useNavigate();
  return(
    <div>
      <div style={{background :"black", color:"white" }}> Hi This is the Top Bar 
        <button onClick={() =>{
       navigate("/Dashboard");
        }}>Dashboard Page</button>

<button onClick={() =>{
     navigate ("/")
        }}>Landing Page</button>
          </div>
          </div>
  )
}

export default App
