import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DepartmentProvider from "./context/DepartmentProvider";
import LoggedInProvider from "./context/LoggedInProvider";
import Cursor from "./components/Cursor";
import PreLoader from "./components/PreLoader";
import ParticlesComponent from "./components/ParticlesComponent";

// Lazy load components
const Body = lazy(() => import("./components/Body"));
const LoginSignup = lazy(() => import("./components/LoginSignup"));
const TodoList = lazy(() => import("./components/TodoList"));
const Syllabus = lazy(() => import("./components/Syllabus"));
const PreviousYearQuestions = lazy(() =>
  import("./components/PreviousYearQuestions")
);
const PuCalendar = lazy(() => import("./components/PuCalendar"));
const Clubs = lazy(() => import("./components/Clubs"));

function App() {
  return (
    <LoggedInProvider>
      <DepartmentProvider>
        <ParticlesComponent id="particles" />
        <Cursor />
        <Outlet />
      </DepartmentProvider>
    </LoggedInProvider>
  );
}

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the preloader (adjust timing as needed)
    setTimeout(() => {
      setLoading(false);
    }, 5650); // Adjust this time to match your animation duration
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return <RouterProvider router={appRouter} />;
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="scrollbar-custom h-full overflow-x-hidden overflow-y-auto">
          <App />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <LoginSignup />
            </Suspense>
            <Footer />
          </>
        ),
      },
      {
        path: "/signup",
        element: (
          <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <LoginSignup />
            </Suspense>
            <Footer />
          </>
        ),
      },
      {
        path: "/home",
        element: (
          <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Body />
            </Suspense>
            <Footer />
          </>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <>
            <Header />
            <Footer />
          </>
        ),
      },
      {
        path: "/todoList",
        element: (
          <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <TodoList />
            </Suspense>
            <Footer />
          </>
        ),
      },
      {
        path: "/syllabus",
        element: (
          <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Syllabus />
            </Suspense>
            <Footer />
          </>
        ),
      },
      {
        path: "/previousYearQuestions",
        element: (
          <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <PreviousYearQuestions />
            </Suspense>
            <Footer />
          </>
        ),
      },
      {
        path: "/puCalendar",
        element: (
          <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <PuCalendar />
            </Suspense>
            <Footer />
          </>
        ),
      },
      {
        path: "/clubs",
        element: (
          <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Clubs />
            </Suspense>
            <Footer />
          </>
        ),
      },
    ],
  },
]);

export default AppWrapper;
