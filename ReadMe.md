# Genesis Events Archive

## Project Overview
This website serves as a static archival collection of websites created by the Genesis team for various events over the years. It offers a nostalgic journey through past events, allowing users to appreciate the creativity, design, and thought process that went into each site. Future generations can use this archive for inspiration and gain insight into the events conducted in the past.

**Note:**
- Since this is a static representation of previously dynamic websites, some routing may not work as expected.
- As this archive is intended for display purposes only, no backend services are deployed with the site.
- The source code, including backend components, can be found in the [Genesis-ISE-DSCE GitHub organization](https://github.com/Genesis-ISE-DSCE).

## Running the Project Locally

### Prerequisites
- **Node.js** (for the first method)
- **Docker** (for the second method)

### Option 1: Using Node.js
1. Install `serve` globally by running the following command:
   `npm install -g serve`
2. Clone this repository and navigate to the project folder.
3. Run the following command to start the project:
    `node cluster.js`

### Option 2: Using Docker
1. Use the provided Docker Compose file to start the container:
    `docker-compose up --build`
Note: Incase you are facing any issue with docker, you can directly pull this image from docker hub `blazerdocker61/goty` and run.
`docker pull blazerdocker61/goty` and then `sudo docker run --rm -p 3000:3000 -p 3006:3006 -p 3005:3005 -p 3003:3003 -p 3004:3004 -d -t blazerdocker61/goty`

## How to contribute
To add more websites to the archive:
- Create a New Directory: Create a new directory under the archives folder, named after the year the event took place.
- Add Website Files: Place the static files for the website (HTML, CSS, JavaScript, images, etc.) within the year-specific directory.
- Update the Build Process: Modify the index.html, cluster.js and docker-compose file to include the new directory.

I used the native js cluster and serve module to serve the static build files. Feel free to try serving with other methods such as pm2 module, scripts, docker containers, express etc.

Feel free to modify the frontend as you like.
