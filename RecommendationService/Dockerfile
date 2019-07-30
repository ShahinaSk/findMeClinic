FROM openjdk:11.0.3-jdk-slim-stretch
ADD ./target/demo-0.0.1-SNAPSHOT.jar  /app/demo/demo-0.0.1-SNAPSHOT.jar
WORKDIR   app/demo
ENTRYPOINT  ["java","-jar","demo-0.0.1-SNAPSHOT.jar"]