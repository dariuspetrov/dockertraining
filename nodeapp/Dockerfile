FROM library/node:10

WORKDIR /app

ENV PORT 80
ENV ENVVALUE "hello from Dockerfile"

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY index.js .

EXPOSE 80

CMD ["npm","start"]