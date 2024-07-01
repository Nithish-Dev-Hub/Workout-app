import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/user">
          <h1>User Dashboard</h1>
        </Link>
        <Link to="/admin">
          <h1>Admin Dashboard</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar