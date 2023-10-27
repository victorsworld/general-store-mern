import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
        },
        {
          path: '/login',
        },
        {
          path: '/register',
        },
      ],
    },
  ]);

  return (
    <div>
      hello
      <RouterProvider router={router} />
      </div>
  );
}

export default App;
