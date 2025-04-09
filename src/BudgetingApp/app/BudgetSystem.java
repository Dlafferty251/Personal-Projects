package BudgetingApp.app;

import java.util.Scanner;

public class BudgetSystem {
    
    public static void main (String[] args) {

        //Creates a new Scanner object that will read user input
        Scanner scanner = new Scanner(System.in); 

        // This is the main method that starts the Budgeting application
        System.out.println("Welcome to the Budget Buddy!");

        // Get User Income
        System.out.println(getUserIncome.getIncome(scanner));

        // Get User Expenses
        String expenseResult = getUserExpenses.getExpenses(scanner);
        System.out.println(expenseResult);

        scanner.close();

        // Calculate Budget



        // Display Budget 



    }
}