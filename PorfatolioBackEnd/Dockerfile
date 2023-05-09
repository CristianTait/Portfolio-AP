FROM openjdk:11-jdk-slim

RUN curl https://cristiantait.com/MVN/portfolio-back-0.0.1-SNAPSHOT.jar -o app.jar

WORKDIR /app

CMD ["java", "-jar", "backend.jar"]
