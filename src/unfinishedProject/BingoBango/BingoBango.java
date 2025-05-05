import java.util.*; //imports some functions such as a the Random number generator

public class BingoBango {
    
    
    //This method is also going to check if the  ball matches a number on the bingo card
    public static boolean searchForCalled(int[][] card, int number) {
        
        for (int i = 0; i < card.length; i++) {
            for (int j = 0; j < card[i].length; j++) {
                if (card[i][j] == number) {
                    return true; // Number found
                }
            }
        }
        return false; // Number not found
    }
      


    public static void main(String[] args) {
        int[][] bingoCard = new int[5][5]; //Declares the bingo card as a 5 x 5 card

        Random random = new Random(); //Creates a random number

        //Runs a loop that will fill the bingo card with numbers
        for(int i = 0; i < bingoCard.length; ++i) { //makes a number for the rows
            for (int j = 0; j < bingoCard[i].length; ++j) { //makes a number for the columns
                bingoCard[i][j] = random.nextInt(100); //Generates a random number between 0 and 99 and puts it into the bingo card
            }
            System.out.println();
        }

        int randomNumber = random.nextInt(100); // Generate a random number to check
        boolean found = searchForCalled(bingoCard, randomNumber);

        


        for(int i = 0;i< bingoCard.length; ++i) {
            for(int j = 0; j < bingoCard[i].length; ++j) {
                System.out.print(bingoCard[i][j] + "\t"); //Prints each number with a tab index by using \t
            }

            System.out.println(); //Creates a new line for each row of the bingo card

        }
        
        if (found == true) {
            System.out.println(" The Number is.... " + randomNumber + " You Have: " + found);
        } else {
            System.out.println("The Number is..." + randomNumber + "You Have: " + found);
        }
    }
}
