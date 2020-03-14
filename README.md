# Node + Expressで作られたシンプルなECサイト

-- スクリーンショット


## 開発環境

- NodeJS
- ExpressJS
- Sequelize
- MySQL

## 機能 🚀

- 商品のCRUD機能（管理画面）
- ショッピングカートに商品を追加
- カートから商品を購入処理
- 商品の在庫管理

## セットアップ 🛠

1. クローン

```
git clone https://github.com/gs-create/cart_sample.git
```

2. dependenciesの解決

```
npm install
```

3. DB作成

各自の環境に合わせてDB`cart_sample`を作成する

4. 起動

```
npm start
```

[http://localhost:8080/](http://localhost:8080/)にアクセス

## 仕様

- admin: 管理画面
    - products: 商品のCRUD、在庫管理
    - users; ユーザー一覧
- users: ユーザー
    - sign_up: 会員登録
    - sign_in: ログイン
- products: 商品
    - index: 一覧、カート追加
- cart: カート
    - index: カートに追加した商品を表示、削除、数の変更
    - confirm: 商品の購入
    - finish: 購入完了
