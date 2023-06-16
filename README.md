# traP 春ハッカソン 2023 26 班 フロントエンドリポジトリ

## セットアップ

### 0. 事前準備

pnpm のインストール

```sh
npm i -g pnpm
```

### 1. クローンする

```sh
git clone git@github.com:traP-jp/h23s_26-UI.git
```

### 2. 必要なものをインストールする

```sh
pnpm i
```

## 使い方

- 開発用サーバーを立てる → `pnpm dev`
- 本番用サーバーのビルド → `pnpm build`
- 本番用サーバーを立てる (要ビルド) → `pnpm start`

詳しいことは全部 [development.md](development.md) に書いてあるのでそっちを見てください。

## 技術スタック

- [Next.js v13](https://nextjs.org/)
- [Mantine UI v6](https://ui.mantine.dev/)
- [Tabler Icons](https://tabler-icons.io/)
- [Jotai](https://jotai.org/)
- [Emotion](https://emotion.sh/docs/introduction)

- ESlint
- Prettier
- Stylelint
