import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <nav className="
        flex flex-row justify-evenly
        bg-slate-200 text-violet-700
        dark:bg-violet-700 dark:text-slate-200
        py-4
        "
      >
        { 
          [ 
            'Persistence', 
            'Patches', 
            'Sense' 
          ].map(pageName => (
            <NavLink 
              to={`/${pageName.toLowerCase()}`} 
              key={pageName}
              className={({isActive}) => 
                "text-xl font-bold \
                py-2 px-4 \
                border-2 rounded-full \
                transition-colors" 
                + 
                (isActive ? 
                  " border-white bg-white \
                  shadow-sm \
                  dark:text-slate-600" 
                  :
                  " border-transparent"
                )
              }
              
            >
              {pageName}
            </NavLink>
          ) )
        }
      </nav>
  )
}

export default Nav