FROM openjdk:11.0.3-jdk-slim-stretch

ADD ./target/eurekaserver-0.0.1-SNAPSHOT.jar /usr/src/eurekaserver-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "eurekaserver-0.0.1-SNAPSHOT.jar"]

