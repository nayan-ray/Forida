import Footer from "./components/Footer/Footer";
import Header from "./components/header/header/Header"
import Home from "./pages/HomePage/Home"
import Product from "./pages/ProductPage/Product"
import TestWithCss from "./pages/test/TestWithCss"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="">
      <Header />
      <main>
        {/* Child routes render right here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <NotFound />, // Global error / 404 handler
    children: [
      { index: true, element: <Home /> }, // Renders at "/"
      { path: 'products/:id', element: <Product /> }, // Dynamic route
    ],
  },
]);




function App() {
 

  // return (
  //   <>
  //     <div>
  //       {/* <TestWithCss /> */}
  //       {/* <Header /> */}
  //       {/* <Home /> */}
  //       <Product />
  //     </div>
  //   </>
  // )

   return <RouterProvider router={router} />;
}

export default App
