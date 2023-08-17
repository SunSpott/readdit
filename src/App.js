import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Home from './components/Reddit/Reddit';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/readdit" element={<Layout />}>
      <Route index element={<Home />} />
    </Route> 
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
