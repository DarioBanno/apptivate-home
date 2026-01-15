import { useState } from "react"
import { Menu, X } from "lucide-react"
import { navItems } from "./Constants"

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg">
        <div className="container px-4 mx-auto relative lg:text-sm flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="#">
              <p className="text-bold text-3xl text-primary">Apptivate</p>
              {/* <img className="h-10 w-auto" src={logo} alt="Logo" /> */}
            </a>
          </div>

          {/* STANDARD EMBEDDED BUTTONS (LARGE SCREEN) */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* DRAWER BUTTON (MOBILE ONLY) */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>


      {/* MOBILE DRAWER OUTSIDE NAV */}
      {mobileDrawerOpen && (
        <div className="fixed top-0 right-0 z-40 bg-primary-100 text-center w-full pt-20 p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                className="mt-8"
              >
                <a href={item.href} onClick={toggleNavbar}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
