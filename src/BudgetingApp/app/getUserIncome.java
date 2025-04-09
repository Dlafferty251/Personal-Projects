package BudgetingApp.app;

import java.util.Scanner;

public class getUserIncome {

    public static String getIncome() {
        //This method will get the user's income 
        //and return it as a string 

        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Please enter your income for the month: ");
            String income = scanner.nextLine();
            return income;
        }
    }
}