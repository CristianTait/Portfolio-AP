FROM openjdk:11-jdk-slim

RUN curl -o backend.jar https://cristiantait.com/jar/portfolio.jar

WORKDIR /app

CMD ["java", "-jar", "backend.jar"]
