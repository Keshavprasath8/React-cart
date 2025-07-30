import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loading from './components/Loading'
import { Toaster } from 'react-hot-toast';


function App() {
 const CartPage = lazy(() => import('./components/CartPage'))
 const FetchPage = lazy(() => import('./components/FetchPage'))
 const Shopping = lazy(() => import('./components/Shopping'))
const Login = lazy(() => import('./components/LoginPage'))
 const FetchDetails = lazy(() => import('./components/FetchDetails'))
 const Offers = lazy(() => import('./components/Offer'))


  return (
    <>
    <Toaster  position="top-right"/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Suspense fallback={<div><Loading/></div>}><FetchPage/></Suspense>} />
           <Route path="/shopping" element={<Suspense fallback={<div><Loading/></div>}><Shopping/></Suspense>} />
            <Route path="/offers" element={<Suspense fallback={<div><Loading/></div>}><Offers/></Suspense>} />
          <Route path="/cart" element={<Suspense fallback={<div><Loading/></div>}><CartPage/></Suspense>} /> 
          <Route path="/"element={<Suspense fallback={<div><Loading/></div>}><Login/></Suspense>} />
          <Route path="/products/:id" element={<Suspense fallback={<div><Loading/></div>}><FetchDetails/></Suspense>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
