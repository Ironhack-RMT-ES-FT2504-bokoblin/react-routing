import allUsers from "../data/users.json"
import { Link } from "react-router-dom"

function UserList() {
  return (
    <div>
      
      <h2>Lista de Usuarios</h2>

      {allUsers.map((eachUser, i) => {
        return (
          <li key={i}>
            <Link  to={`/user/${eachUser.id}`}>{eachUser.username}</Link>
          </li>
        )
      })}

    </div>
  )
}

export default UserList