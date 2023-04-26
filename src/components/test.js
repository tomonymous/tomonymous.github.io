
// This program will work with any whole number sized rectangular gameBoard.
// It checks for N marks in straight lines (rows, columns, and diagonals).
// It is prettiest when ROWS and COLS are single digit numbers.
// Try altering the constants for ROWS, COLS, and N for great fun!    

// PPDs come first

#include <stdio.h>
#define ROWS 9              // The number of rows our gameBoard array will have
#define COLS 9              // The number of columns of the same - Single digit numbers will be prettier!
#define N 3                 // This is the number of contiguous marks a player must have to win
#define INITCHAR ' '        // This changes the character displayed (a ' ' here probably looks the best)
#define PLAYER1CHAR 'X'     // Some marks are more aesthetically pleasing than others
#define PLAYER2CHAR 'O'     // Change these lines if you care to experiment with them


// Function prototypes are next

int playGame    (char gameBoard[ROWS][COLS]);               // This function allows the game to be replayed easily, as desired
void initBoard  (char gameBoard[ROWS][COLS]);               // Fills the ROWSxCOLS character array with the INITCHAR character
void printBoard (char gameBoard[ROWS][COLS]);               // Prints out the current board, now with pretty formatting and #s!
void makeMove   (char gameBoard[ROWS][COLS], int player);   // Prompts for (and validates!) a move and stores it into the array
int checkWinner (char gameBoard[ROWS][COLS], int player);   // Checks the current state of the board to see if anyone has won

// The starting line
int main (void)
{
// Inits
char gameBoard[ROWS][COLS];     // Our gameBoard is declared as a character array, ROWS x COLS in size
int winner = 0;
char replay;

//Code
do                              // This loop plays through the game until the user elects not to
{
    winner = playGame(gameBoard);
    printf("\nWould you like to play again? Y for yes, anything else exits: ");

    scanf("%c",&replay);        // I have to use both a scanf() and a getchar() in
    replay = getchar();         // order to clear the input buffer of a newline char
                                // (http://cboard.cprogramming.com/c-programming/121190-problem-do-while-loop-char.html)

} while ( replay == 'y' || replay == 'Y' );

// Housekeeping
printf("\n");
return winner;
}


int playGame(char gameBoard[ROWS][COLS])
{
int turn = 0, player = 0, winner = 0, i = 0;

initBoard(gameBoard);

do
{
    turn++;                                 // Every time this loop executes, a unique turn is about to be made
    player = (turn+1)%2+1;                  // This mod function alternates the player variable between 1 & 2 each turn
    makeMove(gameBoard,player);
    printBoard(gameBoard);
    winner = checkWinner(gameBoard,player);

    if (winner != 0)
    {
        printBoard(gameBoard);

        for (i=0;i<19-2*ROWS;i++)           // Formatting - works with the default shell height on my machine
            printf("\n");                   // Hopefully I can replace these with something that clears the screen for me

        printf("\n\nCongratulations Player %i, you've won with %i in a row!\n\n",winner,N);
        return winner;
    }

} while ( turn < ROWS*COLS );                           // Once ROWS*COLS turns have elapsed

printf("\n\nGame Over!\n\nThere was no Winner :-(\n");  // The board is full and the game is over
return winner;
}


void initBoard (char gameBoard[ROWS][COLS])
{
int row = 0, col = 0;

for (row=0;row<ROWS;row++)
{
    for (col=0;col<COLS;col++)
    {
        gameBoard[row][col] = INITCHAR;     // Fill the gameBoard with INITCHAR characters
    }
}

printBoard(gameBoard);                      // Having this here prints out the board before
return;                             // the playGame function asks for the first move
}


void printBoard (char gameBoard[ROWS][COLS])    // There is a ton of formatting in here
{                                               // That I don't feel like commenting :P
int row = 0, col = 0, i=0;                  // It took a while to fine tune
                                            // But now the output is something like:
printf("\n");                               // 
                                            //    1   2   3
for (row=0;row<ROWS;row++)                  // 1    |   |
{                                           //   -----------
    if (row == 0)                           // 2    |   |
    {                                       //   -----------
        printf("  ");                       // 3    |   |

        for (i=0;i<COLS;i++)
        {
            printf(" %i  ",i+1);
        }

        printf("\n\n");
    }

    for (col=0;col<COLS;col++)
    {
        if (col==0)
            printf("%i ",row+1);

        printf(" %c ",gameBoard[row][col]);

        if (col<COLS-1)
            printf("|");
    }

    printf("\n");

    if (row < ROWS-1)
    {
        for(i=0;i<COLS-1;i++)
        {
            if(i==0)
                printf("  ----");
            else
                printf("----");
        }

        printf("---\n");
    }
}

return;
}


void makeMove (char gameBoard[ROWS][COLS],int player)
{
int row = 0, col = 0, i=0;
char currentChar;

if (player == 1)                    // This gets the correct player's mark
    currentChar = PLAYER1CHAR;
else
    currentChar = PLAYER2CHAR;

for (i=0;i<21-2*ROWS;i++)           // Newline formatting again :-(
    printf("\n");

printf("\nPlayer %i, please enter the column of your move: ",player);
scanf("%i",&col);
printf("Please enter the row of your move: ");
scanf("%i",&row);

row--;                              // These lines translate the user's rows and columns numbering
col--;                              // (starting with 1) to the computer's (starting with 0)

while(gameBoard[row][col] != INITCHAR || row > ROWS-1 || col > COLS-1)  // We are not using a do... while because
{                                                                       // I wanted the prompt to change
    printBoard(gameBoard);
    for (i=0;i<20-2*ROWS;i++)
        printf("\n");
    printf("\nPlayer %i, please enter a valid move! Column first, then row.\n",player);
    scanf("%i %i",&col,&row);

    row--;                          // See above ^^^
    col--;
}

gameBoard[row][col] = currentChar;  // Finally, we store the correct mark into the given location
return;                             // And pop back out of this function
}


int checkWinner(char gameBoard[ROWS][COLS], int player)     // I've commented the last (and the hardest, for me anyway)
{                                                           // check, which checks for backwards diagonal runs below >>>
    int row = 0, col = 0, i = 0;
    char currentChar;

    if (player == 1)
        currentChar = PLAYER1CHAR;
    else
        currentChar = PLAYER2CHAR;

    for ( row = 0; row < ROWS; row++)                       // This first for loop checks every row
    {
        for ( col = 0; col < (COLS-(N-1)); col++)           // And all columns until N away from the end
        {
            while (gameBoard[row][col] == currentChar)      // For consecutive rows of the current player's mark
            {
                col++;
                i++;
                if (i == N)
                {
                    return player;
                }
            }
            i = 0;
        }
    }

    for ( col = 0; col < COLS; col++)                       // This one checks for columns of consecutive marks
    {
        for ( row = 0; row < (ROWS-(N-1)); row++)
        {
            while (gameBoard[row][col] == currentChar)
            {
                row++;
                i++;
                if (i == N)
                {
                    return player;
                }
            }
            i = 0;
        }
    }

    for ( col = 0; col < (COLS - (N-1)); col++)             // This one checks for "forwards" diagonal runs
    {
        for ( row = 0; row < (ROWS-(N-1)); row++)
        {
            while (gameBoard[row][col] == currentChar)
            {
                row++;
                col++;
                i++;
                if (i == N)
                {
                    return player;
                }
            }
            i = 0;
        }
    }
                                                        // Finally, the backwards diagonals:
    for ( col = COLS-1; col > 0+(N-2); col--)           // Start from the last column and go until N columns from the first
    {                                                   // The math seems strange here but the numbers work out when you trace them
        for ( row = 0; row < (ROWS-(N-1)); row++)       // Start from the first row and go until N rows from the last
        {
            while (gameBoard[row][col] == currentChar)  // If the current player's character is there
            {
                row++;                                  // Go down a row
                col--;                                  // And back a column
                i++;                                    // The i variable tracks how many consecutive marks have been found
                if (i == N)                             // Once i == N
                {
                    return player;                      // Return the current player number to the
                }                                       // winnner variable in the playGame function
            }                                           // If it breaks out of the while loop, there weren't N consecutive marks
            i = 0;                                      // So make i = 0 again
        }                                               // And go back into the for loop, incrementing the row to check from
    }

    return 0;                                           // If we got to here, no winner has been detected,
}  