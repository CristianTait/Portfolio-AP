FROM openjdk:11-jre-slim
RUN apt-get update && apt-get install -y curl
RUN curl  https://cristiantait.com/MVN/cdt-0.0.1-SNAPSHOT.jar -o app.jar
ENTRYPOINT ["java","-jar","app.jar"]
