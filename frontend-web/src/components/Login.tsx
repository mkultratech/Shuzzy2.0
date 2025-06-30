// Handles user authentication via login form.
// Allows users to log in with their username and password.
// On successful login, stores user data in local storage and redirects to the main page.
// Displays an error message if login fails.
// Uses a helper function to build API paths based on environment variables.
// Uses React hooks for state management and form handling.
// Uses React Router for navigation after successful login.
// Displays a page title component for consistent UI.

import { buildPath } from '../utils/api'; // <-- our helper - DO IT
// import PageTitle from './PageTitle'; 


import  { useNavigate } from 'react-router-dom'; 
import React, { useState } from 'react';


// export default function Login()
// {

// 	const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError]       = useState('');
//   const navigate = useNavigate();

//   function doLogin(event:any) : void
//   {
//     event.preventDefault();

//     alert('doIt()');
//   }

//     return(
//       <div id="loginDiv">
//         <span id="inner-title">PLEASE LOG IN</span><br />
//         <input type="text" id="userName" placeholder="Username" ><br />
//         <input type="password" id="loginPassword" placeholder="Password" /><br />
//         <input type="submit" id="loginButton" className="buttons" value = "Do It"
//           onClick={doLogin} />
//         <span id="loginResult"></span>
//      </div>
//     );
// };









export default function Login() 
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const navigate = useNavigate();

// 	function click(event:any) : void
//   {
//     event.preventDefault();

//     alert('doIt()');
//   }

  async function doLogin(e: React.FormEvent) 
  {
		e.preventDefault();
		console.log('🛠️ doLogin fired', { username, password });
		// const url = buildPath('api/login');

		try 
		{
			const res = await fetch('/api/login', {
					method: 'POST',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({login: username, password})
			});

			if (!res.ok) {
        		throw new Error(`HTTP ${res.status}`);
    		}

			const data = await res.json();
			console.log('Login response →', data);

			if (data.id > 0) 
			{
				localStorage.setItem('user', JSON.stringify(data));
				navigate('/shuzzy');
			} 
			else 
			{
				setError('Invalid credentials');
			}

		} 
		catch(err)
		{
			if (err instanceof Error)
				setError(err.message);
			else
				setError('An unexpected error occurred');

			console.error('Login error:', err);
		}
	}

	return ( 
			<form onSubmit = {doLogin} className = "login-form">

				<input 
					name = "login"
					type = "text"
					placeholder = "Username"
					value = {username}
					onChange = {e => setUsername(e.target.value)}
					className = "input"
				/>

				<input
					type = "password"
					placeholder = "Password"
					value = {password} 
					onChange = {e => setPassword(e.target.value)}
					className = "input"
				/>
				
				<button type = "submit" className= "button">Log In</button>
				{error && <p className="text-red-600">{error} </p>}

			</form>
		);
}

 
 
 // {<input type="submit" id="loginButton" className="buttons" value = "Do It" onClick={click} /> }
 
//     const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const result = await post<{ token: string }>('login', { username, password });
//       // e.g. store token, redirect, etc.
//       console.log('Logged in, got token:', result.token);
//     } catch (err: any) {
//       setError(err.message || 'Login failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Log in</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </form>
//   );
// }

