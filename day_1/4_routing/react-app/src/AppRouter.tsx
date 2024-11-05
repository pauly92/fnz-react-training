import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useNavigate,
  useParams,
  useRouteError,
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

const HomePage = () => {
  return <h1>Home</h1>;
};

const Contact = () => {
  return <h1>Contact</h1>;
};

const About = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/contact");
  }
  
  return (
    <>
    <h1>About</h1>
    <button onClick={handleClick}>Navigate to Contact</button>
    </>
  );
};

const User = () => {
  const { id } = useParams();
  return <h1>User : {id}</h1>;
}

const NotFound = () => {
  return <h1>Not Found</h1>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // global layout
    errorElement: <ErrorPage />, // handling errors
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user/:id",
        element: <User />,
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
