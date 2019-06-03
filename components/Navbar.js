import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/" passHref><a>Home<span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about" passHref><a>About</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/posts" passHref><a>Post</a></Link>
          </li>
        </ul>

        <style jsx>{`
          ul li {
            margin-right: 20px;
          }
          ul li a {
            color: #fff;
            text-decoration: none;
          }          
        `}</style>
      </div>
    </nav>
  )
}

