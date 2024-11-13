# techc-web-project-02
Webプロジェクト授業 後期

## インストール
### 📥 パッケージマネージャーのver指定
[corepack](https://nodejs.org/api/corepack.html)を使って、pnpmのインストール
```sh
corepack enable
```
node_modulesなどの依存関係をインストール

```sh
pnpm install --frozen-lockfile
```

### 🚀 開発サーバーの起動
```sh
pnpm run dev
```

## 開発者向け情報
### 🏷️ ブランチ名命名規則
以下のプレフィックスを使用してブランチを作成してください：
| プレフィックス | 用途                                     | 命名例                         |
| -------------- | ---------------------------------------- | ------------------------------ |
| `feature/`     | 新機能の追加                             | `feature/add-login-page`       |
| `fix/`         | バグ修正                                 | `fix/header-bug`               |
| `docs/`        | ドキュメントの修正や更新                 | `docs/update-readme`           |
| `style/`       | コードのフォーマット修正（機能変更なし） | `style/fix-indentation`        |
| `refactor/`    | リファクタリング                         | `refactor/improve-performance` |
| `chore/`       | メンテナンスや設定変更                   | `chore/update-tailwind-config` |

### 🌱 ブランチ作成例
```sh
# 新機能のブランチ作成例 ( 必ず main から作成すること )
git branch feature/add-login-page

# 作成したブランチへ移動
git switch feature/add-login-page

# 作成したブランチをリモートリポジトリにプッシュ ( 追跡可能にするため )
git push -u origin feature/add-login-page
```