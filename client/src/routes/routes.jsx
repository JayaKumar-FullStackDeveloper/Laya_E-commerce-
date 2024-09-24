import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import UserLayout from '../usersLayout';
import { AdminRoute, UserRoute } from '../Components/ProtectedRoutes';
import Homepage from '../Pages/home';
import { AuthProvider } from '../Components/AuthProvider';
import UserLogin from '../Pages/userLogin';
import Registration from '../Pages/userRegistration';
import OtpVerification from '../Pages/OtpVerify';
import PasswordReset from '../Pages/passwordReset';


export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    children: [
      {
        path: '/',
        element: <UserLayout/>,
        children: [
          { path: '', element: <Homepage /> },
          { path: 'userLogin', element: <UserLogin /> },
          { path: 'userSignup', element: <Registration/> },
          { path: 'verify-otp', element: <OtpVerification/> },
          { path: 'userSignup/update/:id', element: <Registration/> },
          { path: 'verify-otp', element: <OtpVerification /> },
          { path: 'forgot-password', element: <PasswordReset/> },
          
        ],
      },

      
      {
        path: '/user',
        element: <UserRoute />,
        children: [
        
        ],
      },

      {
        path: '/admin',
        element: <AdminRoute />,
        children: [
        ],
      },
    
    ],
  },
]);
