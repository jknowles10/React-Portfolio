import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log("Current route:", location.pathname);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
