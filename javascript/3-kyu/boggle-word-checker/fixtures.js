var testBoard = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

Test.expect( checkWord( testBoard, "C" ) == true );
Test.expect( checkWord( testBoard, "EAR" ) == true );
Test.expect( checkWord( testBoard, "EARS" ) == false );
Test.expect( checkWord( testBoard, "BAILER" ) == true );
Test.expect( checkWord( testBoard, "RSCAREIOYBAILNEA" ) == true, "Must be able to check indefinite word lengths going in all directions" );
Test.expect( checkWord( testBoard, "CEREAL" ) == false, "Valid guesses can't overlap themselves" );
Test.expect( checkWord( testBoard, "ROBES" ) == false, "Valid guesses have to be adjacent" );
Test.expect( checkWord( testBoard, "BAKER" ) == false, "All the letters have to be in the board" );
Test.expect( checkWord( testBoard, "CARS" ) == false, "Valid guesses cannot wrap around the edges of the board" );
