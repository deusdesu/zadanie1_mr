FROM scratch AS xxx
LABEL Autor: "Maciej Rak 93006"
ADD "alpine-minirootfs-3.15.4-x86_64.tar.gz" /
CMD ["apk", "update"]


FROM xxx
RUN apk add --update nodejs npm 
WORKDIR /app 
COPY server/package*.json ./ 
RUN npm ci 
COPY server/ . 
EXPOSE 3001
CMD ["node", "index.js"]

