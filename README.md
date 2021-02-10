
# CI Round Robin

CI Round Robin Simple Responsive Web App to render the os hostname of the machine serving the App.  Presently scaled to two machines and should display a different machine name on refresh.

## Requirements

### Node

This is best installed using [Brew](http://brew.sh/)
You should install latest version of node 12

```bash
brew install node
```

## Running for development

### Install dependencies

Install all the dependencies from npm:

```bash
npm i
```

### Start the dev server

```bash
npm run dev
```

### View example

To view this, head to [http://localhost:3000](http://localhost:3000) when the above steps have been followed.

## Docker

For productions with use 2 docker images.  One docker image from the root of the application can be built using the [Dockerfile](Dockerfile). It takes care of the following steps. If using the Dockerfile, the application will be exposed on port 3000.

The second docker image is a simple nginx reverse proxy that masks the app on port 3000 and allows multiple images to run on this.  This is demonstrated by the updated host name on refresh.

To combine these two images there is a simple docker-compose.yml file that is used to start the production ready application by.

```bash
docker-compose up
```

## CI Setup

With every PR created in the repo azure-piplines has been setup to test and build the application.  This runs a set of tasks defined in the azure-piplines.yml file.  These include:

- Setup a Linux machine
- Install NodeJS
- Install NPM dependancies
- Npm Build the web app
- Build, Tag and Deploy the docker images to docker hub
