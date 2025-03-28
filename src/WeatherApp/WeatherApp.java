/*i
 * This Projects goal is to help me learn to use basic Java libraries by creating
 * an app that will the current weather result by utilizig Libraries
 * 
 * I also want to allow the program to be able to allow the user to choose a 
 * location for the weather as well.
 * 
 * 
 */

 import java.util.Scanner;
 import java.io.IOException;
 import okhttp3.*;
 import com.google.gson.JsonObject;
 import com.google.gson.JsonParser;



class WeatherApp {
    //Sets up MY api key for the openweather map and also provides a base url for the computer to work with.
    private static final String API_KEY = "70a5fa365795f6f885faafc0e76709b4";
    private static final String BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your City Name: ");
        //creates a variable 'name' that will serve as the data for the users input
        //scanner.nextLine() creates an input field that gets user input.
        String name = scanner.nextLine();

        try {
            fetchWeather(name);
        } catch (IOException e) {
            System.out.println("Error fetching weather data: " + e.getMessage());
        }
        scanner.close();
    }

    //This methods purpose is to get the city from user input and create an URL
    //That will utilize OKHttp3's feature to create webpage links.
    //This URL is for the OpenWeatherAPI which will take a URL containing certain query parameters
    //Displaying that city's weather. The computer then stores this data and will 
    public static void fetchWeather(String city) throws IOException {
        //Object from OkHttp Librar that allows us to make HTTP Requests
        //OkHttpCLient is like a helper that will go  on the internet
        //and fetch back information for us
        OkHttpClient client = new OkHttpClient();
        HttpUrl url = HttpUrl.parse(BASE_URL).newBuilder()
        .addQueryParameter("q", city) //Gets the city
        .addQueryParameter("appid", API_KEY) //Gets the API_Key that we provided above
        .addQueryParameter("units", "metric") //Gets the unit type the user would like
        .build();

        //This now prepares what is called a "GET"
        //This "Get" request is requesting the OpenWeather website
        //for data regaring the weather by building a url based on user input
        Request request = new Request.Builder().url(url).build();

        //Executes the http request
        try(Response response = client.newCall(request).execute()) {
            //client.newCall(request) is telling the HTTP Client to send the request we created above
            if (!response.isSuccessful()) {
                System.out.println("Failed to fetch weather data...");
                return;
            }
            
            String responseBody = response.body().string(); //Gets the content of the API Response
            parseWeather(responseBody); //Calls another method that will analyze and display the data.

        }


    }

    //Now I am going to create a new method called parseChecker that will go through and 
    //Pick through the data provided by fetchWeather and display it for the user

    private static void parseWeather(String json) {
        //This line will convert the raw json text file into an object for Java.
        //JsonParser.parseString(json) will read the raw JSON string
        //.getasJsonObject() will convert the parsed data in a JsonObject
        JsonObject jsonObject = JsonParser.parseString(json).getAsJsonObject();
        //gets the city name by getting the scanner input by calling the variable name
        //.getAsString() will convert the value to a string
    
        String cityName = jsonObject.get("name").getAsString();

        //Now we must get the temperature from the data.
        JsonObject main = jsonObject.getAsJsonObject("main"); //finds the main section in the JSON and stores it
        double temperature = main.get("temp").getAsDouble(); //Converts the temp value that was extracted into a double

        int humidity = main.get("humidity").getAsInt(); //converts Humidity to an int

        String weather = jsonObject
            .getAsJsonArray("weather") //Gets weather array
            .get(0) //this will access the first item in the array
            .getAsJsonObject() //Converts the item extracted into an object
            .get("description") // Gets the description value
            .getAsString(); //Converts it into a string

        System.out.println("Weather in " + cityName + ":");
        System.out.println("Temperature: " + temperature + "°C");
        System.out.println("Humidity: " + humidity + "%");
        System.out.println("Condition: " + weather);

    }


}

