package BudgetingApp.app;

import java.util.Scanner;

public class getUserIncome {

    public static String getIncome(Scanner scanner) {
        //This method will get the user's income 
        //and return it as a string 

        try {
            System.out.println("Please enter your income for the month: ");
            String income = scanner.nextLine();
            return income;
        } catch (Exception e) {
            return "Your input was not valid. Please try again.";
        }
    }
}