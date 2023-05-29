import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
import WatchPage from './components/WatchPage';
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';

const AppRouter = createBrowserRouter([
  {path:"/",
   element: <Body/>,
   errorElement : <Error/>,
  children:[
    {path:"/",
     element: <MainContainer/>},
    {path:"watch",
     element: <WatchPage/>},
  ]}
]);

function App() {
  return (
    <Provider store={store}>
    <div className="">
      
    <Header/>
   
    <RouterProvider router= {AppRouter}/>
    </div>
    
    </Provider>
  );
}

export default App;
