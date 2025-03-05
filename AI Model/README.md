# Docker Instructions

## Install Docker
To install Docker, follow the instructions for your operating system:

- [Docker for Windows](https://docs.docker.com/docker-for-windows/install/)
- [Docker for Mac](https://docs.docker.com/docker-for-mac/install/)
- [Docker for Linux](https://docs.docker.com/engine/install/)

## Build the Docker Image
To build the Docker image, run the following command in the terminal:
```sh
docker build -t hacktu-app .
```

## Run the Docker Container
Ensure you have built the Docker image before running the container. Use the following command to run the container:
```sh
docker run -p 5000:5000 hacktu-app
```

Make sure to replace `5000` with the appropriate port if you have changed it in the Dockerfile.
