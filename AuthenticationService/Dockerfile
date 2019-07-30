FROM openjdk:11.0.3-jdk-slim-stretch

ADD ./target/AuthenticationService-0.0.1-SNAPSHOT.jar  /consumer/app/AuthenticationService-0.0.1-SNAPSHOT.jar

WORKDIR /consumer/app

ENTRYPOINT ["java","-jar","AuthenticationService-0.0.1-SNAPSHOT.jar"]