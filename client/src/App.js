
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Protect from './Components/Protect';
import { Homepage } from './Pages/home';
import Errorout from './Components/Errorout';
import { AuthProvider } from './Components/AuthContext';
import { Navbar } from './Components/Navbar';
import CollectionList from './Pages/ProductList';
import AdminPage from './admin/Admin';
import Registration from './Pages/userRegistration';
import UsersList from './admin/read';
import UserLogin from './Pages/userLogin';




function App() {
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/userregistration" element={<Registration />} />
        <Route path="/update/:id" element={<Registration />} />
        <Route path="/read" element={<UsersList/>} />
        <Route path="/userlogin" element={<UserLogin/>} />
        <Route element={<Protect/>}>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/products' element={<CollectionList/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path="*" element={<Errorout/>} />
        </Route>
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
