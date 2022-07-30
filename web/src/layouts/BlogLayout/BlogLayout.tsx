import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <Link to={routes.home()}>
        <h1>Redwood Blog</h1>
      </Link>

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
