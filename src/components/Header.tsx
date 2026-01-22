
import  navLink from '../config/navLinks'
import { Link } from "react-router-dom";


function Header({par} : {par:string}) {

  return (
    <nav className='flex gap-2 border-b  h-14 items-center px-4 overflow-x-auto border-neutral-200 shrink-0'>
        <span className='text-sm font-medium text-neutral-500 mr-2 shrink-0'>Layouts: </span>
        {navLink.map((value) => {
            let isActive = (value.name == par)
            return (
                <Link className={`px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-colors ${isActive ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`} 
                to={value.href} key={value.href}>{value.name}
                </Link>

            )
        })}
    </nav>
  )
}

export default Header