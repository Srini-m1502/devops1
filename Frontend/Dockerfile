FROM node 

RUN mkdir -p /srv/front/
WORKDIR /srv/front/

COPY package.json /srv/front/
COPY package-lock.json /srv/front/

RUN npm install 
RUN npm i axios

COPY . /srv/front/

ENTRYPOINT [ "npm", "run", "start" ]

