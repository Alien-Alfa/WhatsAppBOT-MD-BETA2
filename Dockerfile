FROM node:lts-buster

RUN git clone https://github.com/Alien-alfa/WhatsAppBOT-MD-BETA2 /root/AlienAlfa

WORKDIR /root/AlienAlfa/

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

RUN npm install -g npm@8.11.0

RUN set NODE_OPTIONS=--max_old_space_size=2048

RUN npm install -g nodemon 

RUN npm install -g forever

RUN npm i cfonts

RUN npm i -g heroku

CMD ["npm", "start"]
