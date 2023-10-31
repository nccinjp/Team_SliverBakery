## React環境構築

### Node.js Docker

https://hub.docker.com/_/node

### React.js

https://zh-hans.reactjs.org/

### 構築準備
1. リポジトリにある、frontの提出ディレクトリに移動
2. プロジェクトディレクトリを作成
3. 独自のimageを生成するためにDockerfileを作成
~~bash
$ cd TeamDev-SliverBakery/project/front
$ mkdir app
$ vim Dockerfile
~~
- Dockerfileの内容：
~~bash
FROM node:16.17.1-alpine3.15    #Docker Hubからダウンロードするものを指定
ADD ./app /app    #localのディレクトリをcontainerの中のディレクトリと連携
WORKDIR /app    #entrypointの設定
~~
4. Node.jsの環境構築からReactのインストールまで、一連の手順を管理し易いため、docker-composeでcontainerを立ち上がる
~~bash
$ vim docker-compose.yml
~~
- docker-compose.ymlの内容：
~~bash
version: '3.8'
services:
  node:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./app:/app
    command: sh -c "cd react && yarn start"
    ports:
      - "3000:3000"
    stdin_open: true
~~
### 構築開始
1. nodeのimageをpullしとく
~~bash
$ sudo docker pull node:16.17.1-alpine3.15
$ sudo docker image ls
~~
2. containerをコンパイル
~~bash
$ sudo docker-compose build
~~
3. Reactプロジェクトを生成
~~bash
$ sudo docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app react"
~~
4. containerの中のディレクトリを確認
~~bash
$ sudo docker-compose run node ls
~~
5. localのディレクトリを確認
~~bash
$ ls ./app
~~
6. containerを立ち上げる
~~bash
$ sudo docker-compose up -d
~~
7. ブラウザで確認
>http://10.0.1.221:3000
~~bash
$ vim app/react/src/App.js
~~

