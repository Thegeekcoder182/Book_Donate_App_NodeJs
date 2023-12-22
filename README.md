# MERN Book Library App

This is a simple MERN (MongoDB, Express.js, React.js, Node.js) stack application for managing a book library.

## Features

- View a list of books with details such as title, author, genre, publication year, and ISBN.
- Add new books to the library.
- Edit existing book details.
- Delete books from the library.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database set up.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/mern-book-library.git
    ```

2. Navigate to the project directory:

    ```bash
    cd mern-book-library
    ```

3. Install dependencies for both the server and client:

    ```bash
    npm install
    cd client
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory with the following content:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    ```

    Replace `your_mongodb_connection_string` with the connection string for your MongoDB database.

2. Update the `apiUrl` variable in `client/src/index.js` with the URL where your server is hosted.

### Running the Application

1. Start the server:

    ```bash
    npm start
    ```

    The server will run on http://localhost:3001.

2. Start the client:

    ```bash
    cd client
    npm start
    ```

    The React development server will run on http://localhost:3000.

3. Open your browser and visit http://localhost:3000 to use the MERN Book Library App.

## Additional Notes

### Dumping Application State

- At any given time, you can dump the application state in JSON format by clicking the "Dump State" button. This includes user details and book library data.

### Frontend

- The frontend is built using React.js. You can customize the UI by modifying files in the `client/src` directory.

### Backend

- The backend API is built using Express.js and interacts with a MongoDB database. 

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

