FROM openjdk:11.0.3-jdk-slim-stretch

ADD ./target/PatientService-0.0.1-SNAPSHOT.jar  /producer/app/PatientService-0.0.1-SNAPSHOT.jar

WORKDIR /producer/app

ENTRYPOINT ["java","-jar","PatientService-0.0.1-SNAPSHOT.jar"]