import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import UserLayout from '../usersLayout';
import { AdminRoute, UserRoute } from '../Components/ProtectedRoutes';
import Homepage from '../Pages/home';
import { AuthProvider } from '../Components/AuthProvider';

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
         
          
        ],
      },

      // User-specific protected routes
      {
        path: '/user',
        element: <UserRoute />,
        children: [
          // { path: 'dashboard', element: <UserDashboard /> }, // Example user-specific route
          // { path: 'profile', element: <UserProfile /> }, // Example user-specific route
          // Add more protected user routes here
        ],
      },

      // Admin routes with protection
      {
        path: '/admin',
        element: <AdminRoute />,
        children: [
        ],
      },

      // 404 Route (Catch-all)
    
    ],
  },
]);
