import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
const Reload = ({ children }) => {
  const location = useLocation()
  const navType = useNavigationType()
  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      })
    }
  }, [location])
  return <>{children}</>
}

export default Reload
