## 概要

* Firebase Hosting による静的ファイル配信＋ Cloud Functionsによる動的コンテンツ配信 + basic 認証のsample
* ホームのみbasic認証なし。ほかは認証がある auth:  username : password

## 開発環境構築

```
# firebaseの開発ツールインストール
$npm install -g firebase-tools

# firebaseへログイン
$firebase login

# ディレクトリ移動
$cd functions

# 依存moduleインストール
$npm i
```

* ローカルサーバー起動

```
firebase serve
```

## デプロイ

```
firebase deploy
```
