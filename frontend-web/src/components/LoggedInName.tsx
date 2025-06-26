// Displays current user's name and provides a logout button.

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

export default function LoggedInName()
{
  function doLogout(event:any) : void
  {
    event.preventDefault();
  
      alert('doLogout');
  };    

  return(
    <div id="loggedInDiv">
      <span id="userName">Logged In As John Doe </span><br />
      <button type="button" id="logoutButton" className="buttons" 
          onClick={doLogout}> Log Out </button>
    </div>
  );
};

// export default function LoggedInName()
// {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user') || '{}');

//   function doLogout()
//   {
//     localStorage.removeItem('user)');
//     navigate('/');
//   }

//   return (
//     <div className = "flex items-center justify-between">
//       <span>Logged in as {user.firstName} {user.lastName}</span>
//       <button onClick = {doLogout} className = "button-sm">Log Out</button>
//     </div>
//   );
// }



