import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
  </>
))



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
