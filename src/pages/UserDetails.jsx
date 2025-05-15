import { useParams } from "react-router-dom"
import allUsers from "../data/users.json"

function UserDetails() {

  const params = useParams()
  console.log(params)

  console.log(allUsers)
  console.log(params.idUsuario)

  const filteredUser = allUsers.find((eachUser) => {
    if (eachUser.id === params.idUsuario) {
      return true // añade el elemento
    }
  })

  console.log(filteredUser)

  return (
    <div>
      
      <h2>Detalles de un usuario</h2>

      <h4>Nombre: {filteredUser.username} </h4>
      <h5>Ciudad: {filteredUser.city}</h5>
      <p>Curso: {filteredUser.course}</p>

    </div>
  )
}

export default UserDetails