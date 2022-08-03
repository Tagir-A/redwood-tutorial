import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <Link to={routes.home()}>
        <h1>Redwood Blog</h1>
      </Link>
      {isAuthenticated ? (
        <>
          <span>Logged in as {currentUser.email}</span>
          <button type="button" onClick={logOut}>
            Logout
          </button>
        </>
      ) : (
        <Link to={routes.login()}>Login</Link>
      )}

      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
