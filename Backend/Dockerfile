FROM node

RUN mkdir -p /srv/app
WORKDIR /srv/app

COPY package.json /srv/app
COPY package-lock.json /srv/app

RUN npm install 
RUN npm i axios

COPY . /srv/app

ENTRYPOINT ["npm", "start"]

