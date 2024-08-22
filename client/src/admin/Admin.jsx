import { Route, Routes ,Link} from 'react-router-dom';
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';

function AdminPage() {
  return (
    <>
    <div>
      {/* Navigation Bar */}
      <nav className="w-full fixed top-0 bg-gray-900 text-white shadow-lg flex justify-between items-center z-10">
        <div className="p-4 text-2xl font-bold">
          Admin Panel
        </div>
        <div className="space-x-4 px-4">
          <Link to="/shop" className="hover:text-gray-400">Go Shop</Link>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-auto bg-gray-800 text-white h-screen fixed left-0">
          <SideMenu />
        </aside>

        {/* Main Content */}
        <main className="ml-56 w-full h-dvh p-4 mt-14 bg-slate-200 overflow-hidden" >
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
    </>

  );
}

export default AdminPage;
