import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Screens/Home/Home"
import { MainLayout } from "./Layouts/MainLayout"

function App() {

  const router = createBrowserRouter([
    {
      path:  '/',
      element: <Home/>
    },
  ])

  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  )
}

export default App
