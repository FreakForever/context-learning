import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter } from 'react-router-dom';
import TodoDetails from './pages/todoDetails';
import TodoList from './pages/ListTodo';
import CreateTodo from './pages/createTodo';
import ErrorPage from './components/errorPage';
import RootTodoElement from './components/rootTodo';
import CartApplication from './cartApplication/App';
import ThemePage from './themeSwticher/themedPage';
const BrowserRouter = createBrowserRouter([
  {
    path: '/todoApp',
    element: <RootTodoElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoList />,
      },
      {
        path: 'todo/:todoId',
        element: <TodoDetails />,
      },
      {
        path: 'create',
        element: <CreateTodo />,
      },
    ],
  },
]);
function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast('Login SuccessFul!!')
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <CartApplication />
      <ToastContainer />
    </div>
  );
}
export default App;
// String server will take the text directly frok locale server.