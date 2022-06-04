import { HttpClient } from "../httpClient";

class CoffeeService extends HttpClient {
    constructor() {
        super('https://60a8e41820a6410017306677.mockapi.io/api');
    }

    getCoffee() {
        return this.get('coffeshop');
    }
} 

export const coffeeService = new CoffeeService();