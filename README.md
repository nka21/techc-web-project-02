# techc-web-project-02
Webプロジェクト授業 後期

## 📥 パッケージマネージャーのver指定
[corepack](https://nodejs.org/api/corepack.html)を使って、pnpmのインストール
```sh
corepack enable
```
node_modulesなどの依存関係をインストール

```sh
pnpm install --frozen-lockfile
```

## 🚀 開発サーバーの起動
```sh
pnpm run dev
```