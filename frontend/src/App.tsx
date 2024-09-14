import {
  Navigate,
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={
          <Layout>
            <p>Home Page</p>
          </Layout>}>
        </Route>

        <Route path="/search" element={
          <Layout>
            <p>Search Page</p>
          </Layout>
        }></Route>
        <Route path="/register" element={
          <Layout>
            <Register />
          </Layout>
        }></Route>
        <Route
          path='/sign-in'
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      {/* </Router> */}
    </BrowserRouter>
  )
}

export default App
