FROM node:12 AS dev
EXPOSE 3000
# set work directory and if it doesnt exists it will be created
WORKDIR /usr/src/app
#make a env variable and set it to development
ENV NODE_ENV development
# COPY package*.json ./
# USER node
# copy files from local to our container
# COPY . .
# RUN chmod 777 *
# install desired dependencies
# RUN apt-get update
# RUN apt-get install -y inotify-tools
RUN npm install
# RUN npm install --save-dev nodemon
# CMD ["npx","nodemon"]

# build image
# docker build -t czelijm/node-development-test .

# run image and run nodemon
# docker run -commands-for-docker your_dockerhub_username/image-name commands and arguments
# docker run --rm -it -p 3000:3000 -v `pwd -W`:/usr/src/app  czelijm/node-development-test npx nodemon
#FOR WINDOWS
# docker run --rm -it -p 3000:3000 -v `pwd -W`:/usr/src/app czelijm/node-development-test npx nodemon --legacy-watch index.js
