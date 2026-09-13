import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import CakesPage from './pages/CakesPage'
import SnacksPage from './pages/SnacksPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="cakes" element={<CakesPage />} />
        <Route path="snacks" element={<SnacksPage />} />
        <Route path="product/:slug" element={<ProductDetailsPage />} />
        <Route path="products/:slug" element={<ProductDetailsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
