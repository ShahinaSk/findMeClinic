FROM openjdk:11.0.3-jdk-slim-stretch

ADD ./target/SchedulerService-0.0.1-SNAPSHOT.jar /producer/app/SchedulerService-0.0.1-SNAPSHOT.jar

WORKDIR /producer/app

ENTRYPOINT ["java","-jar","SchedulerService-0.0.1-SNAPSHOT.jar"]