class Circle {
    #radius; // Private field to store the radius
  
    // Constructor accepts the radius and initializes the private field
    constructor(radius) {
      this.#radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.#radius * 2; // Diameter = 2 * radius
    }
  
    // Setter for diameter (sets radius based on the given diameter)
    set diameter(diameter) {
      this.#radius = diameter / 2; // radius = diameter / 2
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter; // Circumference = π * diameter
    }
  
    // Setter for circumference (sets radius based on the given circumference)
    set circumference(circumference) {
      this.#radius = circumference / (2 * Math.PI); // radius = circumference / (2 * π)
    }
  
    // Getter for area
    get area() {
      return Math.PI * Math.pow(this.#radius, 2); // Area = π * radius^2
    }
  
    // Setter for area (sets radius based on the given area)
    set area(area) {
      this.#radius = Math.sqrt(area / Math.PI); // radius = sqrt(area / π)
    }
  
    // Getter for radius
    get radius() {
      return this.#radius; // Return the radius
    }
  
    // Setter for radius
    set radius(radius) {
      if (radius <= 0) {
        throw new Error("Radius must be positive.");
      }
      this.#radius = radius; // Set the radius
    }
  }
  
  // Example Usage:
  
  // Create a Circle with radius 5
  const circle = new Circle(5);
  
  // Access the computed properties using getters
  console.log(circle.diameter);      // 10
  console.log(circle.circumference); // 31.41592653589793
  console.log(circle.area);          // 78.53981633974483
  
  // Update the radius using setters for other properties:
  circle.diameter = 12;             // Sets diameter to 12, which changes radius to 6
  console.log(circle.radius);        // 6
  
  circle.circumference = 62.83185307179586; // Sets circumference to 62.83, which changes radius to 10
  console.log(circle.radius);        // 10
  
  circle.area = 314.1592653589793;  // Sets area to 314.16, which changes radius to 10
  console.log(circle.radius);        // 10
  