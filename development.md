# 開発する上で必要なことが全部書いてあるやつ

## 目次

全部一度は目を通しておいて欲しいです。あとは困った時などに参照してください。

- [開発する上で必要なことが全部書いてあるやつ](#開発する上で必要なことが全部書いてあるやつ)
  - [目次](#目次)
  - [開発の進め方](#開発の進め方)
  - [エディタの設定](#エディタの設定)
  - [import alias について](#import-alias-について)
  - [ディレクトリ構成](#ディレクトリ構成)
    - [全体外観](#全体外観)
    - [`/public`](#public)
    - [`/src/components`](#srccomponents)
    - [`/src/hooks`](#srchooks)
    - [`/src/lib`](#srclib)
    - [`/src/pages`](#srcpages)
    - [`/src/styles`](#srcstyles)
  - [pnpm の使い方](#pnpm-の使い方)
  - [ライブラリの使い方](#ライブラリの使い方)
    - [Next.js](#nextjs)
      - [ルーティング](#ルーティング)
      - [リンク](#リンク)
      - [public ディレクトリについて](#public-ディレクトリについて)
    - [Pathpida](#pathpida)
      - [`src/lib/$path.ts`について](#srclibpathtsについて)
    - [Mantine](#mantine)
      - [コンポーネントの使い方](#コンポーネントの使い方)
    - [Emotion](#emotion)
      - [スタイリングの仕方](#スタイリングの仕方)
    - [Jotai](#jotai)
    - [Tabler Icons](#tabler-icons)
      - [アイコンの使い方](#アイコンの使い方)

## 開発の進め方

セットアップとかは[README.md](../README.md)に書いてあるのでそちらを参照してください。

基本は Issue の中から自分のタスクを選ぶ or 任されて、そのタスクをこなすという感じです。できたら (というか途中でも Draft という形で) PR を出してもらって、それを:cp20:とかが Review して、適当に直した上でマージするという感じです。

そしてスタイリング (見た目をいい感じにすること) はやらなくても良いです。 (やっても良いです) とりあえず動くものができれば CSS はなんとかします。もちろん動く上で必要な CSS もあるのでその辺りはうまくやってほしいな～と思います。**(スタイリングに限らずですが)　分からなかったら相談に乗ります**。

1 日目は:cp20:があまり参加できないんですが、オンラインでは質問に答えられなくはないぐらいな感じで、休憩もあるので頑張ってコミットできるようにします。あとは 1 日目の進捗が芳しくなかったら責任を取って 1 日目夜に追い込みます。

## エディタの設定

推奨ライブラリはインストールしてもらえると嬉しいです。何か困ったことがあったらすぐに言ってください。

## import alias について

`/`から始まるパスはルートディレクトリからのパスを差します。例えば`/src/components`は`src/components`と同じです。

**`@/`から始まるパスは`src`ディレクトリからのパスを差します。例えば`@/components`は`src/components`と同じです**。こちらは良く使うので覚えておいてください。

## ディレクトリ構成

### 全体外観

```sh
.
├── public
└── src
    ├── components
    ├── hooks
    ├── lib
    ├── pages
    └── styles
```

### `/public`

[public ディレクトリについて](#publicディレクトリについて)を参照

### `/src/components`

コンポーネントを置くディレクトリです。**コンポーネントは`src/components`以下に置くようにしてください**。`src/pages`以下に置くとルーティングがうまくいかなくなるので注意してください。

小さいコンポーネントはファイルを直接書いてもいいですが、大きいコンポーネントはディレクトリを作ってその中にファイルを置くようにしてください。例えば、`src/components/Header`というディレクトリを作ってその中の`index.tsx`というファイルから本体のコンポーネントを export するようにします。さらに`index.tsx`の中で、例えば`src/components/UserAvatar.tsx`などを import して使うなどすると 1 つのコンポーネントが大きくなり過ぎないようにできます。

### `/src/hooks`

カスタムフック (`use`から始まる関数) を置くところです。**カスタムフックとはコンポーネントのロジック部分だけ切り出してきたもの**で、一部の処理を共通化したり、コンポーネントの中身をすっきりさせるために使います。

### `/src/lib`

コンポーネントとは関わらないロジックを書くところです。あんまり使う機会はないかもしれません。

### `/src/pages`

[ルーティング](#ルーティング)を参照してください。

### `/src/styles`

スタイルを書くところです。基本は[Emotion](#emotion)を使って CSS-in-JS 方式でスタイリングしていこうと思っているので使うことはないと思います。

## pnpm の使い方

pnpm は npm と同じくパッケージマネージャーです。npm と同じような機能を備えているのですが、コマンドが少し違うので対応表を書いておきます。

| npm                           | pnpm                            |
| ----------------------------- | ------------------------------- |
| `npm install` / `npm i`       | `pnpm install` / `pnpm i`       |
| `npm install -D` / `npm i -D` | `pnpm install -D` / `pnpm i -D` |
| `npm run dev`                 | `pnpm dev`                      |
| `npm run build`               | `pnpm build`                    |
| `npm start`                   | `pnpm start`                    |

## ライブラリの使い方

### Next.js

#### ルーティング

**`src/pages`以下にあるファイルは、そのファイル名がそのままページ (URL) になります**。例えば、`src/pages/hoge.tsx`は`/hoge`になり、`src/pages/hoge/fuga.tsx`は`/hoge/fuga`になります。 (例外: `src/pages/index.tsx`は`/`になる) **なので`src/pages`以下にはページのコンポーネントのみを置いて、他のコンポーネントは`src/components`以下などに置かなければいけません**。

さらにサーバー側の API は`/src/pages/api`以下にファイルを作るということになっています。ただサーバー側は少し特殊なのでたぶん今回は使わないと思います。 (モックはたぶん:cp20:が書きます)

`_app.tsx`と`_document.tsx`は何？と思うかもしれませんが、とりあえずは無視して大丈夫です。いじることはまずないと思います。

#### リンク

Next.js ではいい感じに最適化するために**`<a>`タグを使わずに`<Link>`コンポーネントを使う**ことが強く推奨されています。`<Link>`コンポーネントは`next/link`からインポートできます。

#### public ディレクトリについて

**`public`ディレクトリはそのまま`/`以下にルーティングされます**。例えば、`public/hoge.png`は`/hoge.png`としてアクセスできます。画像などを置くことになると思います。

### Pathpida

#### `src/lib/$path.ts`について

Next.js のルーティングに対応して (`pnpm dev`を実行している間は) 自動的に書き変わります。なんでこんなものを生成しているのかというと、typo を防ぐためです。

リンクなどを張りたい時に`href`属性を設定すると思いますが、その時には`/hoge`と書くのではなく、**`@/lib/$path.ts`から`PagesPath`を import してきて、`PagesPath.hoge.$url()`のように書いてください**。(typo してると怒られます)

### Mantine

いい感じのコンポーネントを提供してくれてるライブラリです。

#### コンポーネントの使い方

まず[Mantine のページ](https://mantine.dev/pages/getting-started/)に行って、左のナビゲーションバーの所からお目当てのコンポーネントを探します。`Ctrl+K`で検索画面を出すこともできます。

お目当てのコンポーネントが見つかったら、そのページにいい感じにコードとかが書いてあると思うので、それをいい感じにコピーしたり調整したりして使ってください。

![Mantineの`<Button>`コンポーネントのUsageの画像](readme/mantine-button.png)
_例. `<Button>`コンポーネントの Usage の例_

### Emotion

スタイリング (CSS を書くため) のライブラリです。

#### スタイリングの仕方

次の例のように、`css`関数を使ってスタイルを書くことができます。 (CSS-in-JS 方式) 中身は普通の CSS とほぼ同じですが、少し違う点があります。`&`は自分自身を表し、例えば`&:hover`と書くことで、その要素にマウスが乗った時のスタイルを指定できます。また、`@media`を使って、画面サイズによってスタイルを変えることもできます。その他に、`& div`と指定することで、その要素の子孫の`div`にスタイルを適用することもできます。

```tsx
import { css } from '@emotion/react';

const SampleComponent: FC = () => {
  return (
    <div
      css={css`
        color: red;
      `}
    >
      こんにちは
    </div>
  );
};
```

### Jotai

グローバルな状態 (全てのコンポーネントで共通の`useState`みたいなもの) を管理するためのライブラリです。

次のようにまず`atom`を作成します。

```tsx
// 普通に初期化
const textAtom = atom('hello');
// 型を指定して初期化
const complexTypeAtom = atom<SomeComplexType>({ ... });
```

そのあと、`useAtom()`を使って、その`atom`を使うことができます。`useAtom()`は`[state, setState]`のように、`useState()`と同じように使うことができます。

```tsx
const SampleComponent: FC = () => {
  const [text, setText] = useAtom(textAtom);
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};
```

これだけで`useAtom()`の状態は他のコンポーネントなどと共有されます。 (グローバルに補完される)

### Tabler Icons

アイコンを提供してくれてるライブラリです。

#### アイコンの使い方

次のようにアイコンを import して使うことができます。アイコンは`color`プロパティで色、`size`プロパティでサイズを指定することができます。使えるアイコンの一覧は[Tabler Icons の公式ページ](https://tabler-icons.io/)を確認してください。

```tsx
import { Icon123 } from '@tabler/icons-react';

const SampleComponent: FC = () => {
  return (
    <div>
      <Icon123 color="red" size={32} />
    </div>
  );
};
```
