import java.util.Scanner;

public class main {

    Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {

        //gets input from user
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the hour (0-11): ");
        
        int hour = scanner.nextInt();
        
        System.out.print("Enter the minutes)0-59) :  ");
        int minutes = scanner.nextInt();
        // We Know every angle between hours is going to be 30 
        // I am using the modulo expression to make sure that the hour stays in range.
        //Now we can multiple the hour by 30 to get the degrees.
        //minutes * .5 is representing how the hour hand gradually moves
        double hourAngle = (hour % 12) * 30 + (minutes * 0.5);

        //Each Minute mark is spaced 6 degrees apart so we are going to apply the hour logic to this
        double minAngle = minutes * 6;

        //this will ensure there is no negative angles. 

        double angle = Math.abs(hourAngle - minAngle);
        //gets the difference by comparing the angle to whats left after finding whats left after 360. 

        angle = Math.min(angle, 360 - angle);

        System.out.println("The angle between the minute hand and the hour hand is: " + angle + " degrees");
        scanner.close();
    }
}

//uses help from chatgpt.com

