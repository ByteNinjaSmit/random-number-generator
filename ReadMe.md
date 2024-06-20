Certainly! Below is an updated `README.md` file that includes the additional information you requested:

```markdown
# Random Number Generator Prototype

This project is a prototype of a web application that generates a 6-digit random number every 30 seconds, similar to Time-based One-Time Password (TOTP) security. The generated number is synchronized across all connected devices and is displayed on an admin dashboard. Users can input the number to proceed with verification.

## Features

- Generates a new 6-digit random number every 30 seconds.
- Displays the random number on the admin dashboard.
- Users can input the number for verification on the client side.

## Use Case

This prototype simulates a scenario similar to TOTP security where:
- The random number is displayed only on the admin dashboard.
- Users on client devices need to input this number for verification before proceeding to the next step.

This is useful for scenarios requiring double verification, such as offline shopping procedures.

## Project Structure

```
/project-root
  /public
    index.html
  server.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ByteNinjaSmit/random-number-generator.git
   cd random-number-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Run Server

Start the Node.js server using `nodemon`:
```bash
npx nodemon server.js
```

The server will start running at `http://localhost:3000`.

### Access the Website

Open your web browser and navigate to:
```
http://localhost:3000/index.html
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by TOTP security mechanisms.
- Built as a prototype for demonstrating synchronized random number generation.

```

### Notes:
- Replace `your-username` in the Git clone command with your actual GitHub username or the URL of your repository.
- Ensure your server (`server.js`) and client-side HTML (`index.html`) are correctly configured as per your project structure.

This README.md file provides an overview of your project, instructions for setup and running, and context on its purpose as a prototype for synchronized random number generation akin to TOTP for offline shopping procedures or other double verification scenarios. Adjust as needed based on any specific details or additional features you might implement in your project.