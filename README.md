# Setup NodeJS Typescript Sequelize MySQL Basic

## Hướng dẫn sử dụng

## 1. Tải thư mục `node_modules`

- Chạy lệnh: `yarn`

## 2. Chỉnh sử file môi trường `.env`

- BASE_URL = localhost
- PORT = 3000
- DB_HOST = DB_HOST
- DB_PORT = DB_PORT
- DB_NAME = DB_NAME
- DB_USERNAME = DB_USERNAME
- DB_PASSWORD = DB_PASSWORD
- DIALECT = DIALECT

## 3. Tạo bảng cơ sở dữ liệu

- Chạy lệnh: `yarn create:db`

## 4. Tạo dữ liệu có sẵn

- Chạy lệnh: `yarn seed:db`

## 5. Chạy server

- Chạy lệnh `yarn server`

## 6. Một số lệnh

- npx sequelize-cli model:generate --name User --attributes username:string,email:string
- npx sequelize-cli seed:generate --name UserSeeder

## 7. Hoàn tất project

- Chạy lệnh `yarn build`

```
Tác giả: kanisdev
```
