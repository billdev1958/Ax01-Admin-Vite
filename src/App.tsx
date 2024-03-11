import SideBar from './components/SideBar';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthService } from './services/authentication';



export default function ProtectedRoute () {
  const isAuthenticated = AuthService.checkAuthentication();

  if (!isAuthenticated) {
    // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
    return <Navigate to="/login" />;
  }  
  
  return (
        <div className='main'>
          <SideBar/>
          <Outlet/>
          
        </div>
      );
}