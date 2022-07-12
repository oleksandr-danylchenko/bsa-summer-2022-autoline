# Autoline

**Autoline** is a multifunctional automobile-centric service. It allows searching by filters, detailed comparing,
and reviewing, but also it picks up the available options on the market to choose the best price.

## Table of contents

[1. Introduction](#1-Introduction)

&nbsp;&nbsp;[1.1 Useful Links](#11-useful-links)

[2. Domain](#2-Domain)

[3. Database Schema](#3-Database-Schema)

[4. Architecture](#4-Architecture)

&nbsp;&nbsp;[4.1 Global](#41-Global)

&nbsp;&nbsp;&nbsp;&nbsp;[4.1.1 Technologies](#411-Technologies)

&nbsp;&nbsp;[4.2 Frontend](#42-Frontend)

&nbsp;&nbsp;&nbsp;&nbsp;[4.2.1 Technologies](#421-Technologies)

&nbsp;&nbsp;&nbsp;&nbsp;[4.2.2 Folder Structure](#422-Folder-Structure)

&nbsp;&nbsp;[4.3 Backend](#43-Backend)

&nbsp;&nbsp;&nbsp;&nbsp;[4.3.1 Technologies](#431-Technologies)

&nbsp;&nbsp;&nbsp;&nbsp;[4.3.2 Folder Structure](#432-Folder-Structure)

&nbsp;&nbsp;[4.4 Shared Package](#44-Shared-Package)

&nbsp;&nbsp;&nbsp;&nbsp;[4.4.1 Reason](#431-Reason)

&nbsp;&nbsp;&nbsp;&nbsp;[4.4.2 Technologies](#442-Technologies)

[5. How to Run](#5-How-to-Run)

&nbsp;&nbsp;[5.1 In Docker](#51-In-Docker)

[6. Deployment](#6-Deployment)

## 1. Introduction<a id="1-Introduction"></a>

### 1.1 Useful Links<a id="11-useful-links"></a>

- Pay attention, that we have
  certain [quality criteria](https://github.com/BinaryStudioAcademy/quality-criteria/blob/production/source/javascript.md)
  , which we should follow during application development.

- [Production deployment](https://auto.ria.com/uk/)

## 2. Domain<a id="2-Domain"></a>

Our task is to help the buyer quickly and conveniently find the best offer auto offer.
For those who are determined by the choice, in each section,
there is a selection by parameters and an opportunity to compare products with each other.
Available and convenient text search allows users to search both the desired sections and specific products by name.
And on the page of each model, there is detailed information that will help you make a decision:
description, technical characteristics, photos and videos, useful links, and reviews.
There is also a block "Where to buy?" with a list of online stores, prices, and direct links to the purchase page.

## 3. Database Schema<a id="3-Database-Schema"></a>

To store that data we use the **`MariaDB`**, community-developed, commercially supported fork of the **`MySQL`**.

TDB: It's still in the planning 😅😢

1. Data is stored in a single schema - `autoline`.
2. Tables are named in the **CamelCase** and the **singular** form.

## 4. Architecture<a id="#4-Architecture"></a>

### 4.1 Global<a id="#41-Global"></a>

#### 4.1.1 Technologies<a id="#411-Technologies"></a>

1. [Typescript](https://www.typescriptlang.org/)
2. [NodeJS 17](https://nodejs.dev/)
3. [Express](https://expressjs.com/)
4. [MariaDB](https://mariadb.org/)
5. [Prisma ORM](https://www.prisma.io/)
6. [Passport](https://www.passportjs.org/) + various auth strategies
7. [React 18](https://reactjs.org/)
8. [Vite](https://vitejs.dev/)
9. [Redux Toolkit](https://vitejs.dev/)
10. [Redux Persist](https://www.npmjs.com/package/redux-persist)
11. [MUI](https://mui.com/)
12. [Docker](https://www.docker.com/)
13. [Docker-Compose](https://docs.docker.com/compose/)
14. [nginx](https://www.nginx.com/)
15. [Github Actions](https://github.com/features/actions)

### 4.2 Frontend

#### 4.2.1 Technologies

1. [React](https://reactjs.org/) as a frontend library
2. [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/) as a state manager

#### 4.2.2 Folder Structurehttps://vitejs.dev/

1. Assets - static assets (images, global styles)
2. Common - common/shared files (types, enums)
3. Components - plain react components
4. Exceptions
5. Helpers
6. Services - api accessing services
7. Store - redux store with all features as sub folders
8. Validation-schemas - schemas that used for forms validation

### 4.3 Backend

#### 4.3.1 Technologies

#### 4.3.2 Folder Structure

1. Api - rest endpoints. **There should be no domain logic**
2. Common - common/shared files (types, enums)
3. Data - everything related to data access (migrations, models, repositories)
4. Exceptions
5. Helpers
6. Services - domain logic
7. Validation-schemas - schemas that used for input data validation

### 4.4 Shared Package

#### 4.4.1 Reason

As we are already using js on both frontend and backend it would be useful to share some contracts and code between them.

#### 4.4.2 Technologies

1. [Joi](https://github.com/sideway/joi) as a schema validator

## 5. How to Run

### 5.1 Manually (with hot reload)

1. Create and fill all .env files. These files are:

- .env/frontend.env
- .env/backend.env
- .env/postgres.env

You should use .env.example folder as a reference.

2. Install dependencies (node_modules). Run `npm run install:all` in the root folder.

3. Install pre-commit hooks: `npx simple-git-hooks` in the root folder. This hook is used to verify code style on commit.

4. Run database. You can either run it in docker using command `cd ./docker/bws && docker-compose -f docker-compose.services.yml up --build` or by installing postgres on your computer. Docker variant is preferred.

5. Apply migrations: `cd backend && npm run migrate:dev`

6. Run backend: `cd backend && npm run start:dev`

7. Run frontend: `cd frontend && npm run start`

### 5.2 In Docker (without hot reload)

1. Create and fill all .env files. These files are:

- .env/frontend.env
- .env/backend.env
- .env/postgres.env

You should use .env.example folder as a reference.

2. Run docker: `cd .docker/bws && docker-compose -f docker-compose.yml up --build`

## 6. Deployment

All code is hosted in docker containers on AWS. CI/CD implemented using Github Actions
