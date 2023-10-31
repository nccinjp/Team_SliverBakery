# Front end

</br>

## 開発環境
<table rules="none" align="center">
	<td>
        <table rules="none" align="center">
- 基本設定
            <tr>
                <td>IP</td>
                <td>10.0.1.221</td>
            </tr>
            <tr>
                <td>Username</td>
                <td>koumoto</td>
            </tr>
            <tr>
                <td>Password</td>
                <td>学籍番号@ecc</td>
            </tr>
            <tr>
                <td>branch</td>
                <td>front</td>
            </tr>    
        </table>
    </td>
	<td>
        <table rules="none" align="center">
- VM設定
            <tr>
                <td>OS</td>
                <td>CentOS7</td>
            </tr>
            <tr>
                <td>CPU</td>
                <td>2 Core</td>
            </tr>
            <tr>
                <td>RAM</td>
                <td>2 G</td>
            </tr>
            <tr>
                <td>Disk</td>
                <td>10 G</td>
            </tr>
        </table>
    </td>
	<td>
        <table rules="none" align="center">
- サーバ設定
            <tr>
                <td>Domain</td>
                <td>devre.rinlink.jp</td>
            </tr>
            <tr>
                <td>WebServer</td>
                <td>apache</td>
            </tr>            
            <tr>
                <td>node.js</td>
                <td>16.17.1</td>
            </tr>
            <tr>
                <td>React</td>
                <td>17.0.2</td>
            </tr>  
        </table>
    </td>
</table>

</br>

## React環境構築
### ディレクトリ構造
```
home
└── koumoto
    └── TeamDev_SliverBakery
        ├── document
        ├── presen
        └── project
            ├── back
            └── front
                ├── production 
                └── develop
                    ├── Dockerfile
                    ├── docker-compose.yml
                    ├── project.bak
                    └── project?
```
### Node.js Docker

https://hub.docker.com/_/node

### React.js

https://zh-hans.reactjs.org/

### 構築準備
1. リポジトリにある、frontの提出ディレクトリに移動
2. プロジェクトディレクトリを作成
3. 独自のimageを生成するためにDockerfileを作成
~~~bash
$ cd TeamDev-SliverBakery/project/front
$ mkdir app
$ vim Dockerfile
~~~
- Dockerfileの内容：
~~~bash
FROM node:16.17.1-alpine3.15    #Docker Hubからダウンロードするものを指定
ADD ./app /app    #localのディレクトリをcontainerの中のディレクトリと連携
WORKDIR /app    #entrypointの設定
~~~
4. Node.jsの環境構築からReactのインストールまで、一連の手順を管理し易いため、docker-composeでcontainerを立ち上がる
~~~bash
$ vim docker-compose.yml
~~~
- docker-compose.ymlの内容：
~~~bash
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
~~~
### 構築開始
1. nodeのimageをpullしとく
~~~bash
$ sudo docker pull node:16.17.1-alpine3.15
$ sudo docker image ls
~~~
2. containerをコンパイル
~~~bash
$ sudo docker-compose build
~~~
3. Reactプロジェクトを生成
~~~bash
$ sudo docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app project1"
~~~
4. containerの中のディレクトリを確認
~~~bash
$ sudo docker-compose run node ls
~~~
5. localのディレクトリを確認
~~~bash
$ ls ./app
~~~
6. containerを立ち上げる
~~~bash
$ sudo docker-compose up -d
~~~
7. ブラウザで確認
>http://10.0.1.221:3000
~~~bash
$ vim app/react/src/App.js
~~~

### 新たなプロジェクトを生成するとき
~~~bash
cd ~/front/develop
cp -R project.bak <プロジェクト名>
cd <プロジェクト名>
vim docker-compose.yml

<project_name>のところを<プロジェクト名>に変更

docker-compose build
(docker image が生成される)

sudo docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app <プロジェクト名>"
~~~
ブラウザで確認:http://10.0.1.221:project_port

> ## _今後のスケジュール_
<table rules="none" align="center">
    <tbody>
        <tr>
            <th>R4.10.08 ~ R4.10.09</th>
            <td>Git & Docker の基本操作・完</td>
        </tr>
        <tr>
            <th>R4.10.10 ~ R4.10.16</th>
            <td>React & Ruby の基本操作・完</td>
        </tr>
        <tr>
            <th>R4.10.17 ~ R4.10.31</th>
            <td>React & Ruby によるの小規模開発</td>
        </tr>
        <tr>
            <th>R4.11.01</th>
            <td>製作品動作確認</td>
        </tr>
    </tbody>
</table>