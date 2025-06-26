import React, { useState } from 'react';
import { buildPath } from '../utils/api';
export default function CardUI() {
const user = JSON.parse(localStorage.getItem('user') || '{}');
const [search, setSearch] = useState('');
const [cardName, setCardName] = useState('');
const [results, setResults] = useState<string[]>([]);
const [message, setMessage] = useState('');

async function addCard(e: React.MouseEvent) {
    e.preventDefault();
    try {
    const res = await fetch(buildPath('api/addcard'), {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userId: user.id, card: cardName})
    });
    const data = await res.json();
        setMessage(data.error ? 'Error: ' + data.error : 'Card added');
    } 
    catch(err: any) {
        setMessage(err.message);
    }
}
async function searchCard(e: React.MouseEvent) {
    e.preventDefault();
    try {
        const res = await fetch(buildPath('api/searchcards'), {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userId: user.id, search})
        });
        const data = await res.json();
        setResults(data.results);
        setMessage('');
    } 
    catch(err: any) {
        setMessage(err.message);
    }
}

return (
    <div className="space-y-4">
        <div>
					<input
							type="text"
							placeholder="Search cards"
							value={search}
							onChange={e => setSearch(e.target.value)}
							className="input"
					/>
						<button onClick={searchCard} className="btn">Search</button>
					</div>
					{results.length > 0 && <p>Found: {results.join(', ')}</p>}
					<div>
					<input
						type="text"
						placeholder="New card name"
						value={cardName}
						onChange={e => setCardName(e.target.value)}
						className="input"
					/>
					<button onClick={addCard} className="btn">Add Card</button>
        </div>
        {message && <p>{message}</p>}
    </div>
    );
}





// import React, { useState } from 'react';
// import '../App.css'; // Assuming you have a CSS file for styling

// export default function CardUI()
// {
    
//     function addCard(event:any) : void
//     {
// 	    event.preventDefault();

// 	    alert('addCard()');

//     };

//     function searchCard(event:any) : void
//     {
//         event.preventDefault();
        
// 	   alert('searchCard');
//     };

//     return(
//       <div id="accessUIDiv">
//        <br />
//        <input type="text" id="searchText" placeholder="Card To Search For" />
//        <button type="button" id="searchCardButton" className="buttons" 
//            onClick={searchCard}> Search Card </button><br />
//        <span id="cardSearchResult"></span>
//        <p id="cardList"></p><br /><br />
//        <input type="text" id="cardText" placeholder="Card To Add" />
//        <button type="button" id="addCardButton" className="buttons" 
//           onClick={addCard}> Add Card </button><br />
//        <span id="cardAddResult"></span>
//      </div>
//     );
// }