import About from "./pages/About"
import HomePage from "./pages/HomePage"
import Location from "./pages/Location"

import { Routes, Route, Link } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import UserList from "./pages/UserList"
import UserDetails from "./pages/UserDetails"

function App() {

  return (
    <>
      
      <Navbar />

      <Routes>

        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/location/sede-principal" element={ <Location /> } />
        <Route path="/users" element={ <UserList /> } />
        <Route path="/user/:idUsuario" element={ <UserDetails />} />

        {/* error 404 */}
        <Route path="*" element={ <NotFound /> }/>

      </Routes>

    </>
  )
}

export default App