import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import CardPage from '../pages/CardPage';
export default function App() {
const user = localStorage.getItem('user');

return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route
      path="/cards"
      element={user ? <CardPage /> : <Navigate to="/" replace />}
      />
      </Routes>
    </BrowserRouter>
  );
}








// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-
// dom';
// import './App.css';
// import LoginPage from './pages/LoginPage';
// import CardPage from './pages/CardPage';
// function App() {
//   return (
//     <Router >
//       <Switch>
//         <Route path="/" exact>
//           <LoginPage />
//         </Route>
//         <Route path="/cards" exact>
//           <CardPage />
//         </Route>
//         <Redirect to="/" />
//       </Switch>
//     </Router>
//   );
// }
// export default App;
