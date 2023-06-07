import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Layout } from '../layout/Layout'

export const User = () => {
  const { isLogged } = useSelector((state) => state.user );

  return (
    isLogged ?
    <Layout>
      <Outlet />
    </Layout>
    :
    <Navigate to={'/login'} state={{ message: 'Please log in!' }} />
  )
}
