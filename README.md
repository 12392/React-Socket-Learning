# WebSocket

WebSocket is a communication protocol similar to HTTP, FTP, and SMTP.

## WebSocket Vs HTTP

- **HTTP**: 
  - Client to Server (Request)
  - Server to Client (Response)
  - One-way communication

- **WebSocket**: 
  - Connection established between server and client
  - Both client and server can send requests
  - Two-way data communication (duplex communication)

## Socket.io

Socket.io is an npm package based on WebSocket to implement two-way communication with ease and less code.

[Socket.io Documentation](https://socket.io/docs/v4/tutorial/introduction)

### Socket.io Terminologies

- **io**: Refers to the entire connection system.
- **socket**: Refers to a particular client of that system. Every socket has its ID.
- **emit**: Creates an event (The Event (Data))
  - Example: `io.emit(event1, 'Hi')`
- **on**: Captures the event (The Event (Data))
  - Example: `socket.on(event1, () => {})`
- **broadcast**: If a particular client makes a request, every client in the entire system receives the event except the client who created it.
  - Example: `socket.broadcast.emit(...)`
- **to**: For personal messages. Every socket/client refers to a room, and every room has its own ID.
  - Example: `socket.to(room_id).emit(...)`
- **join**: To join people in the room.
  - Example: `socket.join(room_id)`

## Setup

### Directory Structure

```sh
mkdir server
mkdir client
```

Open different terminals for server and client.

### Server Setup

1. Navigate to the server directory:
    ```sh
    cd server
    ```
2. Initialize npm and install dependencies:
    ```sh
    npm init -y
    npm i express socket.io
    npm i --save-dev nodemon
    npm i cors
    ```
3. Update `package.json`:
    ```json
    {
      "type": "module",
      "scripts": {
        "dev": "nodemon app.js",
        "start": "node app.js"
      }
    }
    ```

### Client Setup

1. Navigate to the client directory:
    ```sh
    cd client
    ```
2. Create a new Vite project:
    ```sh
    npm create vite@latest
    ```
3. Choose `React` and `JavaScript + SWC`.
4. Install dependencies:
    ```sh
    npm i
    npm install @mui/material @emotion/react @emotion/styled
    npm i socket.io-client
    ```
