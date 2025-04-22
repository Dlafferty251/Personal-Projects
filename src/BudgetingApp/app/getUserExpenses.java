package BudgetingApp.app;

import java.util.Scanner;

public class getUserExpenses extends BudgetSystem {
        public static String getExpenses(Scanner scanner) {
        //This method will get the user's expenses 
        //and return them as a string 

        try {
            
            //We need to make Exception handling 
            System.out.println("Please enter your expenses for Dining Out: ");
            String diningOut = scanner.nextLine();

            System.out.println("Please enter your expenses for Groceries: ");
            String groceries = scanner.nextLine();

            System.out.println("Please enter your expenses for Rent: ");
            String rent = scanner.nextLine();

            System.out.println("Please enter your expenses for Car Payment: ");
            String carPayment = scanner.nextLine();

            System.out.println("Please enter all other expenses: ");
            String otherExpenses = scanner.nextLine();

            String totalExpensesMath = "Total Expenses: " + (Double.parseDouble(diningOut) + 
                                        Double.parseDouble(groceries) +
                                        Double.parseDouble(rent) + 
                                        Double.parseDouble(carPayment) + 
                                        Double.parseDouble(otherExpenses)) + "\n";
                                    
            return totalExpensesMath;
            
        } catch (Exception e) {
            return "One or more of your inputs were not valid numbers. Please try again.";
        }
    }
}
