import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loading from './components/Loading'

function App() {
 const CartPage = lazy(() => import('./components/CartPage'))
 const FetchPage = lazy(() => import('./components/FetchPage'))
const Login = lazy(() => import('./components/LoginPage'))
 const Redux = lazy(() => import('./components/Redux'))


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Suspense fallback={<div><Loading/></div>}><FetchPage/></Suspense>} />
          <Route path="/home/cart" element={<Suspense fallback={<div><Loading/></div>}><CartPage/></Suspense>} /> 
          <Route path="/"element={<Suspense fallback={<div><Loading/></div>}><Login/></Suspense>} />
          <Route path="/redux" element={<Suspense fallback={<div><Loading/></div>}><Redux/></Suspense>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
