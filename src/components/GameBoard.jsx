
export default function GameBoard({onSelectSquare, board}){
 
    return (
    <ol id="game-board">
        {board.map((row,rowIndex) => (
            <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) => (
                <li key={colIndex}>
                    <button
                     onClick={() => onSelectSquare(rowIndex,colIndex)} 
                     disabled={playerSymbol !== null}>
                        {playerSymbol}
                    </button>
                    </li>
                ))}
            </ol>
        </li>
    ))}
    </ol>
    );
}


//deriving state
   


    //const [gameBoard,setGameBoard] = useState(initialGameBoard);     function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         //a new array is been created(innerArray) ref to updatedBoard  and elements are copied from prevGameBoard.
    //         const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }

    //updating object state immutably
    //if your state is object or an array then u update it in an immutable way
    // create a copy of old state to a new obj/new array first
    //and change that copy into existing obj/array



    //never forget to returnwith round brackets  