import { useEffect, useState } from 'react'
import { footerItems } from '@/components/Constants'

const Footer = () => {
  const [colsStyle, setColsStyle] = useState({})

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth >= 1024) {
        setColsStyle({
          gridTemplateColumns: `repeat(${footerItems.length + 1}, minmax(0, 1fr))`,
        })
      } else {
        setColsStyle({})
      }
    }

    updateCols()
    window.addEventListener("resize", updateCols)
    
    return () => window.removeEventListener("resize", updateCols)
  }, [])

  return (
    <footer className="bg-primary text-white py-10 px-6">
      <div
        className="max-w-7xl mx-auto gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-none"
        style={colsStyle}
      >
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-xl font-bold">Apptivate</h2>
          <p className="mt-2 text-sm text-white">Your activity. Your brand. Your app.</p>
        </div>

        {/* Links */}
        {footerItems.map(({ section, items }, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2">{section}</h3>
            <ul className="text-sm space-y-2">
              {items.map((item, index) => (
                <li key={index}>
                  {item.title && <span>{item.title}: </span>}
                  <a
                    href={item.href}
                    className="hover:underline"
                    {...(item.newTab && { target: "_blank", rel: "noopener noreferrer"})}
                  >
                      {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-neutral-200 mt-10">
        <p>&copy; {new Date().getFullYear()} Apptivate LLC. All rights reserved.<br />Registered in Sharjah, UAE. Trade License no. 2432633.01</p>
      </div>
    </footer>
  )
}

export default Footer
