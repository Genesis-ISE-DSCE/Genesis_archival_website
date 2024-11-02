const cluster = require("cluster");
const { exec } = require("child_process");

// Define ports and file paths for each instance
const servers = [
  { port: 3000, path: "." },
  { port: 3001, path: "archives/2024/Hackman" },
  { port: 3002, path: "archives/2024/Catalysis" },
  { port: 3003, path: "archives/2023/Hackman" },
  { port: 3004, path: "archives/2023/Catalysis" },
];

if (cluster.isMaster) {
  servers.forEach((server) => {
    const worker = cluster.fork();
    worker.send(server);
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} exited. Code: ${code}, Signal: ${signal}`);
  });
} else {
  // Each worker runs this code
  process.on("message", (server) => {
    // Run the 'serve' command with appropriate arguments
    exec(`serve ${server.path} -p ${server.port}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error starting server on port ${server.port}: ${stderr}`);
        process.exit(1);
      } else {
        console.log(`Server running at http://localhost:${server.port}`);
      }
    });
  });
}
