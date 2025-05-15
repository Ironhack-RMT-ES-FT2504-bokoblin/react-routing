import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
        {/* //!EN REACT NUNCA DEBEMOS USAR ETIQUETAS a PARA ENLACES INTERNOS */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">Conocenos</Link>
        <br />
        <Link to="/location/sede-principal">Ubicación</Link>
        <br />
        <Link to="/users">Lista de Usuarios</Link>

      </nav>
  )
}

export default Navbar