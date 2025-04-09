package BudgetingApp.app;

import java.util.Scanner;

public class BudgetSystem {
    
    public static void main (String[] args) {

        //Creates a new Scanner object that will read user input
        Scanner scanner = new Scanner(System.in); 

        // This is the main method that starts the Budgeting application
        System.out.println("Welcome to the Budget Buddy!");

        // Get User Income and make it a variable called incomeResult
        double incomeResult = Double.parseDouble(getUserIncome.getIncome(scanner));

        // Get User Expenses and make it a variable called expenseReult
        double expenseResult = Double.parseDouble(getUserExpenses.getExpenses(scanner));
        System.out.println(expenseResult);

        // Calculate Budget
        String budgetSummary = getBudget.calculateBudget(incomeResult, expenseResult);

        System.out.println(budgetSummary);
        // Display Budget 


        scanner.close();
    }
}