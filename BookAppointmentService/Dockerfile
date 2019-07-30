FROM openjdk:11.0.3-jdk-slim-stretch

ADD ./target/BookAppointmentService-0.0.1-SNAPSHOT.jar  /producer/app/BookAppointmentService-0.0.1-SNAPSHOT.jar

WORKDIR /producer/app

ENTRYPOINT ["java","-jar","BookAppointmentService-0.0.1-SNAPSHOT.jar"]