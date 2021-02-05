# Shift Scheduler

## Project Description

Shift Scheduler provides a streamlined solution for managers to create shift schedules instead of manual scheduling. Managers can create shift schedules and provides a centralized network for communication within the company, as well as be notified of shifts, conflicts, and changes. Users can post their availability or request time off within a period of time that has been set by their manager.

## Technologies Used

* Apache Tomcat - version 9.0.41
* Bootstrap - version 4.6.0
* Moment.js - version 2.29.1
* Bulma - version 0.9.1
* Jasmine - version 3.6.0
* Karma - version 5.1.0
* Spring - version 5.2.12.RELEASE
* Spring MVC - version 5.2.12.RELEASE
* Spring Aspects - version 5.2.12.RELEASE
* Spring ORM - version 5.2.12.RELEASE
* Hibernate - version 5.4.10.Final
* Postgresql JDBC driver - version 42.2.18
* Java Servlet API - version 4.0.1
* jackson-databind - version 2.11.3
* Log4j 1.x - version 2.14.0
* JUnit - version 4.12
* Mockito - version 3.7.7

## Features

* Employees can view their shift schedules and message other employees.
* Managers can view and edit shift schedules.
* Managers can post bulletin messages for all employees to see.
* Managers can register new employees.

## Getting Started

### Build dependencies

* Node.js 12 or later
* Angular 11 or later
* Apache Maven 3.6.3 or later
* JDK 8 or later

### Runtime dependencies

* Apache Tomcat 9
* Any HTTP server that supports static hosting, or any static web hosting solution

### Build

#### Back-end API

```
$ git clone https://github.com/elishaSword/Shift-Scheduler.git
$ cd P2-Scheduler
$ mvn package
```

#### Front-end SPA

```
$ git clone https://github.com/elishaSword/Shift-Scheduler.git
$ cd p2-RESTon-angular/src
$ npm install
$ ng build --prod
```

### Install

#### Back-end API

The resulting `.war` will be built in `P2Scheduler/target`, and can be manually deployed to an Apache Tomcat instance configured to allow access to its manager interface. The resulting application will be available at `/P2Scheduler-0.0.1-SHAPSHOT/` on the server.

#### Front-end API

The resulting website will be built in `p2-RESTon-angular/dist/p2-RESTon-angular` and can be statically hosted as is.

## License

This software is intellectual property of Revaure LLC. Unauthorized reproduction is strictly prohibited.

