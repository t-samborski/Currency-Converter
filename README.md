# The app works as a currency calculator.
  ### Website address: [Adres](https://t-samborski.github.io/currency-converter)
### The task of the application is to convert the exchange rate of the currency selected by the user. The user can convert the PLN exchange rate into many other currencies, which are collected directly from the European Central Bank.
![Widok aplikacji](/image/calculator.jpg)
## Mode of action
### In the first field, the user enters the amount in PLN that he wants to convert.
![Podanie kwoty](/image/amount.jpg)
### ### In the second field, the user can select one of the available currencies. By selecting one of them and clicking the Recalculate button, the application will calculate the amount you can get for the given amount of PLN.
![Wybór waluty](/image/currencz.jpg)

#### The application has been designed in such a way that it can download API from the European Central Bank, which makes any currency with its current exchange rate available.
## Other uses in the application
### The application also has the current time, which is displayed properly in all places of the world. It is updated every second, so the clock works in real time.
![Zegar](/image/time.jpg)

#### The calculator is designed in such a way that the user is informed that currency data is currently being downloaded. During this short waiting time, a message is displayed to make the user aware of why the application is not currently working yet.
![Loading](/image/Loading.jpg)
#### When an error occurs while downloading data, the user will see a message instead of the currency calculator informing that something has gone wrong.
![Error](/image/error.jpg)
## Technologies used in the application.
- HTML
- CSS
- Java Script
- Normalize CSS
- BEM convention
- React.js
## The application is created by styled-components. All sections of the website are in a separate directory, and the functions are in one hook. This makes the App.js file as transparent as possible.
