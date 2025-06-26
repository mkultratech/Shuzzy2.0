// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import CardPage from './pages/CardPage'



export default function App() 
{
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/shuzzy" element={<CardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

// import Login from './components/Login';
// import './App.css'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import Login from './components/Login';
// import CardPage from './pages/CardPage';
// export default function App() {
//   const user = localStorage.getItem('user');
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route
//             path="/cards"
//             element={user ? <CardPage /> : <Navigate to="/" replace />}
//           />
//         </Routes>
//       </BrowserRouter>
//     );
// }

// import CardPage from './pages/CardPage.tsx';
// export default function App()
// {
//   return (
//     <CardPage />
//   );
// }