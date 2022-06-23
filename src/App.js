import Login from './component/Login';
import LinkPage from './component/LinkPage'
import Unauthorized from './component/Unauthorized'
import Home from './component/Home'
import Editor from './component/Editor'
import Admin from './component/Admin'
import AdminChill from './component/AdminChill'
import Lounge from './component/Lounge'
import Missing from './component/Missing'
import RequireAuth from './component/RequireAuth';
import { Routes, Route } from 'react-router-dom'

const ROLES = [ 'Guest', 'Editor', 'Admin' ]

function App() {
  return (
    <main className="App">
      <Routes>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* private routes */}
          <Route element={<RequireAuth allowedRoles={ROLES} />}>
            <Route path="/" element={<Home />} />    
          </Route>
          <Route element={ <RequireAuth allowedRoles={[ROLES[1]]} /> }>
            <Route path="editor" element={<Editor />} />
          </Route>
          <Route element={ <RequireAuth allowedRoles={[ROLES[2]]} /> }>
            <Route path="admin" element={<Admin />} />
            <Route path="admin/chill" element={<AdminChill />} />
          </Route>
          <Route element={ <RequireAuth allowedRoles={[ROLES[1], ROLES[2]]} /> }>
            <Route path="lounge" element={<Lounge />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
      </Routes>
    </main>
  );
}

export default App;