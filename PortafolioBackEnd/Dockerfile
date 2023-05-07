FROM openjdk:11-jdk-slim

RUN apt-get update && apt-get install -y wget

WORKDIR /app

RUN wget https://cristiantait.com/jar/portfolio-back-0.0.1-SNAPSHOT.jar -O backend.jar

CMD ["java", "-jar", "backend.jar"]
