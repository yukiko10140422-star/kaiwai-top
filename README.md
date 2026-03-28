# KAIWAI - 学生向けキャリア診断 LP

> 迷っている学生へ。3分の診断で、次の一歩がわかる。

学生を4つのタイプに分類し、それぞれに合った具体的なアクションステップを提示するキャリア診断のランディングページです。

**サイトURL:** https://yukiko10140422-star.github.io/kaiwai-top/

---

## 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| Next.js | 16.2.1 | フレームワーク |
| React | 19.2.4 | UI ライブラリ |
| TypeScript | 5 | 型安全 |
| Tailwind CSS | v4 | スタイリング |
| GitHub Pages | - | ホスティング（静的エクスポート） |

---

## セットアップ

### 必要なもの

- **Node.js** 20 以上
- **npm**（Node.js に付属）
- **Claude Code**（開発時に使用）

### 手順

```bash
# 1. リポジトリをクローン
git clone https://github.com/yukiko10140422-star/kaiwai-top.git
cd kaiwai-top

# 2. 依存パッケージをインストール
npm ci

# 3. 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000/kaiwai-top を開くと確認できます。

### その他のコマンド

```bash
npm run build   # 静的ビルド（out/ に出力）
npm run lint    # ESLint でコードチェック
```

---

## プロジェクト構成

```
src/
├── app/
│   ├── layout.tsx      # ルートレイアウト、メタデータ、フォント設定
│   ├── page.tsx        # ホームページ（各コンポーネントを配置）
│   └── globals.css     # Tailwind インポート、アニメーション、テーマ変数
├── components/         # React コンポーネント（下の一覧を参照）
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Flow.tsx
│   ├── Categories.tsx
│   ├── GrowthPath.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── MobileFixedCTA.tsx
│   ├── ScrollEffects.tsx
│   └── Divider.tsx
└── hooks/
    └── useScrollReveal.ts  # スクロール表示アニメーション用フック
```

### コンポーネント一覧

| コンポーネント | 説明 |
|--------------|------|
| Nav | ナビゲーションバー（モバイルメニュー付き） |
| Hero | ヒーローセクション（アニメーション付き） |
| Flow | 診断フロー説明（3ステップ） |
| Categories | 4つの診断タイプ（ドラッグ可能カルーセル） |
| GrowthPath | YAP 成長ステージ表示 |
| Features | 特徴ハイライト |
| Testimonials | ユーザーの声 |
| FAQ | よくある質問 |
| CTA | コールトゥアクション |
| Footer | フッター |
| MobileFixedCTA | モバイル固定 CTA |
| ScrollEffects | スクロールエフェクト |
| Divider | セクション区切り |

---

## 開発の進め方

[CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。

Claude Code を開いて作業を始めるだけで OK。Claude が手順をガイドします。

---

## デプロイ

`main` ブランチにマージされると、GitHub Actions が自動で以下を実行します。

1. `npm ci` で依存パッケージをインストール
2. `npm run build` で静的ファイルを生成（`out/`）
3. GitHub Pages にデプロイ

手動でのデプロイ作業は不要です。

---

## ライセンス

未定
