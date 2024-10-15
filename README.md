# SchoolHacks App

## Frontend Deployment

### 1. Create a new file called nginx.conf and add the following code

```bash
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

### 2. Create a new file called Dockerfile and add the following code

```bash
# First stage: build the react app
# FROM tiangolo/node-frontend:10 as build-stage
FROM node:18 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build

# Second stage: use the build output from the first stage with nginx
FROM nginx:1.25
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

# Copy the default nginx.conf to get the try-files directive to work with react router
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
```
### 3. Add both files to your frontend root folder (same level as package.json) and push your code to your git repo

**The above requires that you have already set up a github workflow (pipeline) for your frontend project.**

### 4. Exchange the schoolhack image in the docker-compose file with your own image

```bash
  image: <your_docker_hub_username>/<your_docker_hub_repo_name>:<your_docker_hub_tag>
```

**Remember to replace everything related to schoolhack with your own project name**

## How to use it

###  Run Docker

```bash
  docker-compose up -d
```

### Stop Docker

```bash
  docker-compose down
```

### Access Traefik Dashboard through browser

```bash
  traefik.<your_domain>
```

### Access Your Rest Api

```bash
  <your_domain>/<your_api_path> (example: api.3sem.dk/api or restapi.3sem.dk/api)
```

### Reset DB data installation

(-v) // remove volumes
```bash
 docker-compose down -v 
```

```bash
 sudo  rm -rf ./data
```

### Connect your remote database to your local pgAdmin container

```bash
  <your_domain>:5432
```

### Testing the api

- use the http file inside the utility folder to test the api

***

