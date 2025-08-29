FROM postgres:latest

RUN apt-get update && apt-get install -y \
    wget \
    unzip

WORKDIR /docker-entrypoint-initdb.d

RUN wget -O dvdrental.zip https://neon.tech/postgresqltutorial/dvdrental.zip \
 && unzip dvdrental.zip \
 && rm dvdrental.zip

COPY ./init.sh /docker-entrypoint-initdb.d/