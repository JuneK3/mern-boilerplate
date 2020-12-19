# MERN Stack Boiler-Plate
## Intro
노드교과서를 학습하면서 BoilerPlate를 제작해야겠다는 생각이 들었고

Node-React를 사용하는 개인프로젝트 제작에 도움이 될 수 있도록 BoilerPlate를 제작하기로 함

John Ahn님의 BoilerPlate 제작 강좌를 참고해서 제작하려고 함

우선적으로 JWT를 사용하여 Authentication을 구현할 계획임

일단 완성 후 Passport를 사용해서 Authentication을 구현한 버전을 다른 Branch에 올릴 계획임

>Note: 일단 MongoDB를 사용해서 만들어볼 생각이고 개인프로젝트 제작에 NoSQL보다 RDBMS를 더 자주 사용하게 될 것 같아 다른 Branch에 MySQL버전을 만들어서 올려둘 계획임

## MERN Stack
- M: MongoDB (MySQL 버전도 제작 계획)
- E: Express
- R: React, Redux
- N: Node

## 제공되는 기능들
- Connection to Database (Mongo, MySQL)
- Login, Register, Logout 기능
- JWT를 사용하는 authentication(or Passport)
- Landing Page, Login Page, Register Page
- Form Validation

### Todo
- 일단 데이터베이스의 User모델에 JWT를 저장하는 방식으로 인증을 구현함
- 좋은 방법은 아닌것 같다는 생각이 들어서 JWT를 이용한 인증을 더 공부해야 할 필요성을 느낌
- JWT를 데이터베이스에 저장하는 경우 서버를 껏다가 다시 키면 로그인이 되어 있는 현상이 나타남

## Dependencies

### server
```js
"dependencies": {
    "bcrypt": "^5.0.0",
    "concurrently": "^5.3.0",
    "cookie-parser": "^1.4.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.11.4",
    "morgan": "^1.10.0"
  }
```
### client
```js
"dependencies": {
    "@ant-design/icons": "^4.3.0",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "antd": "^4.9.2",
    "axios": "^0.21.0",
    "http-proxy-middleware": "^1.0.6",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-icons": "^4.1.0",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "redux": "^4.0.5",
    "redux-promise": "^0.6.0",
    "redux-thunk": "^2.3.0",
    "web-vitals": "^0.2.4"
  }
```

## Start BoilerPlate
    $cd server && npm i
    $cd ../client && npm i
    $cd ../server && npm run dev

## ScreenShots
### Landing Page
![LadingPage](https://user-images.githubusercontent.com/35721370/102701555-6cf08c00-429b-11eb-87c5-7c1da6b51f3a.PNG)

### Login Page
![LoginPage](https://user-images.githubusercontent.com/35721370/102701561-885b9700-429b-11eb-803a-8cbb6f859bee.PNG)

### Register Page
![RegisterPage](https://user-images.githubusercontent.com/35721370/102701564-927d9580-429b-11eb-886a-878495e6d3cc.PNG)

### Form Validation
![Validation](https://user-images.githubusercontent.com/35721370/102701571-9a3d3a00-429b-11eb-9f6e-eb34f6a07e29.PNG)


## Reference
- [John Ahn님의 BoilerPlate 제작강좌](https://www.youtube.com/watch?v=fgoMqmNKE18&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&ab_channel=JohnAhn)
- [John Ahn님의 BoilerPlate Repo](https://github.com/jaewonhimnae/boilerplate-mern-stack)
- [ZeroCho님의 노드교과서](https://github.com/ZeroCho/nodejs-book)
- [Node BestPractice](https://github.com/goldbergyoni/nodebestpractices)
