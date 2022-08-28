import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';

// import { Home } from '../../pages/Home';
// import { Products } from '../../pages/Products';
// import { About } from '../../pages/About';
// import { NotFound } from '../../pages/NotFound';
// import { ProductDetails } from '../../pages/ProductDetails';
// import { Mission } from 'components/About/Mission';
// import { Team } from 'components/About/Team';
// import { Reviews } from 'components/About/Reviews';

// const createAsyncComponent = path => lazy(() => import(path));

const Home = lazy(() => import('../../pages/Home'));
const Products = lazy(() => import('../../pages/Products'));
const About = lazy(() => import('../../pages/About'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const ProductDetails = lazy(() => import('../../pages/ProductDetails'));
const Mission = lazy(() => import('../About/Mission'));
const Team = lazy(() => import('../About/Team'));
const Reviews = lazy(() => import('../About/Reviews'));
const MyComponent = lazy(() => import('../MyComponent'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/home/mycomponent" element={<MyComponent />} />
        <Route path="/products" element={<Products />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
