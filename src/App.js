//import { useHistory } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NewPage from "./NewPage"
import SignUpForm from "./SignUpForm"
//import { BrowserRouter } from "react-router-dom"

function App() {
  //const history = useHistory()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/NewPage" element={<NewPage />} />
      </Routes>
    </div>
  )
}

export default App
