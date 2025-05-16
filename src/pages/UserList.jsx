import allUsers from "../data/users.json"
import { Link, useSearchParams } from "react-router-dom"

function UserList() {

  const [ searchParams, setSearchParams ] = useSearchParams()
  const course = searchParams.get("course")
  console.log(course)

  const handleFilterCourse = (event) => {
    console.log("seleccionando un curso", event.target.value)

    if (event.target.value === "") {
      setSearchParams({})
    } else {
      setSearchParams({"course": event.target.value})
    }

  }



  return (
    <div>
      
      <h2>Lista de Usuarios</h2>

      <h3>filtra por curso</h3>
      <select onChange={handleFilterCourse} name="" id="">
        <option value="">Todos</option>
        <option value="web">Web Dev</option>
        <option value="ux">UX/UI</option>
        <option value="data">Data</option>
      </select>

      <hr />

      {allUsers
        .filter((eachStudent) => {
          if (course === null) {
            // el usuario ha seleccionado el filtro "Todos"
            return true  // añade todos los estudiantes
          } else {
            // en caso contrario, filtramos por lo que haya seleccionado
            return eachStudent.course === course
          }
        })
        .map((eachUser, i) => {
        return (
          <li key={i}>
            <Link to={`/user/${eachUser.id}`}>{eachUser.username}</Link>
          </li>
        )
      })}

    </div>
  )
}

export default UserList