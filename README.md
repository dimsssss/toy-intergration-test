<p align="center">
    <h1 align="center">
        통합테스트 for nodejs
    </h1>
    <hr width=”15px” color=”black” noshade />
    <p align="center"><a href="http://www.yes24.com/Product/Goods/104084175">단위 테스트</a> 7장 내용을 nodejs로 포팅한 프로젝트입니다<a href="https://github.com/dimsssss/toy-intergration-test"></a>.</p>
</p>

<p align="center">
    <a href="">
        <img alt="license" src="https://img.shields.io/github/license/dimsssss/toy-intergration-test">
    </a>
    <a href="">
        <img alt="npm" src="https://img.shields.io/node/v-lts/npm?label=npm&logo=npm">
    </a>
    <a href="">
        <img alt="express" src="https://img.shields.io/node/v-lts/express?label=express&logo=express">
    </a>
    <a href="">
        <img alt="jest" src="https://img.shields.io/node/v-lts/express?label=jest&logo=jest">
    </a>
    <a href="">
        <img alt="sequelize" src="https://img.shields.io/node/v-lts/sequelize?label=sequelize&logo=sequelize">
    </a>
</p>

## 🏗 설치

### 웹 서버

```shell
git clone https://github.com/dimsssss/toy-intergration-test
cd toy-intergration-test
npm install
```

### 데이터베이스 
```shell
docker run --name=intergration -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=intergration -p 6603:3306 -d mysql:latest
```
### 데이터베이스 마이그레이션
```shell
# 초기화
npx sequelize-cli init
# migration
npx sequelize-cli db:migrate
# migration 되돌리기
npx sequelize-cli db:migrate:undo:all
```

### 데이터베이스 설정 파일
config/config.json
```json
{
  "development": {
    "username": "root",
    "password": "1234",
    "database": "intergration",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "1234",
    "database": "intergration",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "1234",
    "database": "intergration",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```


## 🧾 사용법

### 테스트 코드 실행

```shell
npm run test
```
