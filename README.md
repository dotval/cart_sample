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

### ルーティング

- admin: 管理画面TOP
    - index: 商品の一覧表示、商品のCRUDまでのリンク、在庫管理、公開/非公開の設定
    - products: 
        - new: 商品の新規作成、画像のアップロード
        - edit: 商品の編集
        - delete: 商品の削除
    - users:
        - index: ユーザー一覧
    - purchases:
        - index: 購入履歴一覧
- users: ユーザー
    - index: マイページ
    - sign_up: 会員登録
    - sign_in: ログイン
    - (password/reset): パスワードリセット
- products: 商品
    - index: 一覧、検索
    - show: 商品詳細、カート追加
- cart: カート
    - index: カートに追加した商品を表示、削除、数の変更、合計金額の確認
    - confirm: 商品の購入確認
    - finish: 購入完了

### データベース

#### products

<table>
    <tr>
        <th>カラム名</th>
        <td>型</td>
        <td>長さ</td>
        <td>Null許可</td>
        <td>デフォルト</td>
        <td>キー</td>
        <td>その他</td>
    </tr>
    <tr>
        <th>id</th>
        <td>BIGINT</td>
        <td>20</td>
        <td></td>
        <td></td>
        <td>PRI</td>
        <td>auto_increment</td>
    </tr>
    <tr>
        <th>name</th>
        <td>VARCHAR</td>
        <td>255</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>price</th>
        <td>INT</td>
        <td>11</td>
        <td></td>
        <td>0</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>stock</th>
        <td>INT</td>
        <td>11</td>
        <td></td>
        <td>0</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>public_flg</th>
        <td>TINYINT</td>
        <td>1</td>
        <td></td>
        <td>0</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>image</th>
        <td>VARCHAR</td>
        <td>255</td>
        <td>✅</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>created_at</th>
        <td>DATETIME</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>updated_at</th>
        <td>DATETIME</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

#### users

<table>
    <tr>
        <th>カラム名</th>
        <td>型</td>
        <td>長さ</td>
        <td>Null許可</td>
        <td>デフォルト</td>
        <td>キー</td>
        <td>その他</td>
    </tr>
    <tr>
        <th>id</th>
        <td>BIGINT</td>
        <td>20</td>
        <td></td>
        <td></td>
        <td>PRI</td>
        <td>auto_increment</td>
    </tr>
    <tr>
        <th>username</th>
        <td>VARCHAR</td>
        <td>255</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>admin_flg</th>
        <td>TINYINT</td>
        <td>1</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>email</th>
        <td>VARCHAR</td>
        <td>255</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>password</th>
        <td>VARCHAR</td>
        <td>255</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>created_at</th>
        <td>DATETIME</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>updated_at</th>
        <td>DATETIME</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

#### purchases

<table>
    <tr>
        <th>カラム名</th>
        <td>型</td>
        <td>長さ</td>
        <td>Null許可</td>
        <td>デフォルト</td>
        <td>キー</td>
        <td>その他</td>
    </tr>
    <tr>
        <th>id</th>
        <td>BIGINT</td>
        <td>20</td>
        <td></td>
        <td></td>
        <td>PRI</td>
        <td>auto_increment</td>
    </tr>
    <tr>
        <th>product_id</th>
        <td>BIGINT</td>
        <td>20</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>user_id</th>
        <td>BIGINT</td>
        <td>20</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>price</th>
        <td>VARCHAR</td>
        <td>255</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>amount</th>
        <td>VARCHAR</td>
        <td>255</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>created_at</th>
        <td>DATETIME</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>updated_at</th>
        <td>DATETIME</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
