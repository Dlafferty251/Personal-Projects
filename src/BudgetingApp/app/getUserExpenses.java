package BudgetingApp.app;

import java.util.Scanner;

public class getUserExpenses {
        public static String getExpenses() {
        //This method will get the user's expenses 
        //and return them as a string 

        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Please enter your expenses for the month (comma separated): ");
            String expenses = scanner.nextLine();
            return expenses;
        }
    }
}
