import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { MainLayout } from './components/layout/MainLayout'
import { useEffect, useState } from 'react'
import Loader from './components/common/Loader';
import { PageTitle } from './components/common/PageTitle';
import { AddNewProduct } from './components/pages/Products/AddNewProduct';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); //setup an effect to scroll the window to the top whenever the pathname changes

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />) : (
    <MainLayout>
      <Routes>
        <Route path='products/add-new-product' element={<>
        <PageTitle title='Add new Product | Mern-Admin'/>
        <AddNewProduct/>
        </>}/>
        {/* <Route index /> */}
      </Routes>
    </MainLayout>
  )
}

export default App
