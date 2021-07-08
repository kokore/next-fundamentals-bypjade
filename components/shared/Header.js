import Navbar from './navs/Navbar'
import NavLink from './navs/NavLink'

export default () => (
  <Navbar>
    <NavLink to="/" brand>
      Home
    </NavLink>
    <NavLink to="/articles">Articles</NavLink>
    <NavLink to="/users">Users</NavLink>
    <NavLink to="/auth/signin" right>
      Login
    </NavLink>
  </Navbar>
)
