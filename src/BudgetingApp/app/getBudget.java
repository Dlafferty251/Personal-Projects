package BudgetingApp.app;

public class getBudget extends BudgetSystem {
    public static String calculateBudget(double incomeResult, double expenseResult) {

        double remainingBudget = incomeResult - expenseResult;
        double savings = 0.15 * incomeResult; // 15% of income
        double discretionarySpending = remainingBudget - savings;
        double fixedExpenses = expenseResult * 0.5; // 50% of expenses
       
        // CoPilot Assisted with the layout of the budget summary
        String budgetSummary = "----------------------------\n" +
                               "       Budget Summary       \n" +
                               "----------------------------\n" +
                               //String.format is used to format the output
                               //$%.2f is used to format the double to 2 decimal places
                               String.format("Income:                 $%.2f\n", incomeResult) +
                               String.format("Expenses:               $%.2f\n", expenseResult) +
                               String.format("Remaining Budget:       $%.2f\n", remainingBudget) +
                               String.format("Savings (15%%):          $%.2f\n", savings) +
                               String.format("Discretionary Spending: $%.2f\n", discretionarySpending) +
                               String.format("Fixed Expenses (50%%):   $%.2f\n", fixedExpenses) +
                               "----------------------------";
        return budgetSummary;
    }
}
