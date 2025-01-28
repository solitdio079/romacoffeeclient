import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function Navbar() {
     const location = useLocation()

     useEffect(() => {
       const loadFlyonui = async () => {
         await import('flyonui/flyonui')
         window.HSStaticMethods.autoInit()
       }
       loadFlyonui()
     }, [location.pathname])
  return (
    <nav className="intersect:motion-opacity-in-0 intersect:motion-duration-[2s] intersect:motion-translate-y-in-100 navbar rounded-none justify-between gap-4 sticky top-0 z-50 shadow">
      <div className="navbar-start">
        <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:9]">
          <button
            id="dropdown-name"
            type="button"
            className="dropdown-toggle btn btn-text btn-circle dropdown-open:bg-base-content/10 dropdown-open:text-base-content"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span className="icon-[tabler--menu-2] size-6 lg:size-8"></span>
          </button>
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden"
            role="menu"
            data-scrollspy="#pages"
            data-scrollspy-scrollable-parent="#pages"
            aria-orientation="vertical"
            aria-labelledby="dropdown-name"
          >
            <li>
              <Link className="dropdown-item" to="/about">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#gallery">
                Şubelerimiz
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/contact">
                İletişim
              </Link>
            </li>
            <hr className="border-base-content/25 -mx-2 my-3" />
            <li>
              <Link className="dropdown-item" to="/">
                Ana Sayfa
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center flex items-center">
        <a
          className="link text-base-content link-neutral text-xl font-semibold no-underline"
          href="#"
        >
          <img src="./logo.png" className="w-14 lg:w-24" />
        </a>
      </div>
      <div className="navbar-end items-center gap-4">
        <a
          target="_blank"
          href="https://www.instagram.com/romacoffeetea/"
          className="btn btn-sm btn-text btn-circle size-[2.125rem]"
          aria-label="Search Button"
        >
          <span className="icon-[tabler--brand-instagram] lg:size-8 size-[1.375rem]"></span>
        </a>
      </div>
    </nav>
  )
}
