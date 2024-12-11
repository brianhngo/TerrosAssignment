# Terros Assignment - Build the backend logic of the board game Chest.

# Candidate - Brian Ngo

# Email - brianhngo@gmail.com

## Hi, I wanted to create a ChessBoard class where a new instance would be created whenever the route is called. I'm not too familiar with chess, but I thought of including some standard properties in the class, such as gameBoard, whoseTurn, pieceDirection, gameResult, and gameStatus.

## Once a new instance is initialized should have a method to validate a user's move, ensuring that the move is valid. If the move is valid, we would update the board and then check the endgame status to determine if the game is over. While I know checkmates are a key part of chess, I haven't gotten that far yet. For now, my endgame status will check if a king exists and then evaluate checkmate.

## If given more time, I want to use WebSockets (specifically socket.io) to enable real-time communication between the frontend and backend. The socket will send a signal whenever a user makes a move, and the corresponding backend will handle the request. Additionally, I plan to design the frontend grid so that users can visually see the chessboard and updates as moves are made.

# To Start just run

## Run npm install to install the necessary dependencies.

## Run npm run start to start the application.

## Open your browser and go to http://localhost:3000 to access the app.
