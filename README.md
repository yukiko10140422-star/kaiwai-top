# KAIWAI - 学生向けキャリア診断 LP

> 迷っている学生へ。3分の診断で、次の一歩がわかる。

学生を4つのタイプに分類し、それぞれに合った具体的なアクションステップを提示するキャリア診断のランディングページです。

**サイトURL:** https://kaiwai-black.vercel.app

---

## 技術スタック

<!-- AUTO-GENERATED -->
| 技術 | バージョン | 用途 |
|------|-----------|------|
| Next.js | 16.2.1 | フレームワーク（App Router） |
| React | 19.2.4 | UI ライブラリ |
| TypeScript | 5 | 型安全 |
| Tailwind CSS | v4 | スタイリング |
| Vercel | - | ホスティング・自動デプロイ |
<!-- /AUTO-GENERATED -->

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
npm install

# 3. 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000 を開くと確認できます。

### コマンド一覧

<!-- AUTO-GENERATED -->
| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動（ホットリロード付き） |
| `npm run build` | 本番ビルド（型チェック込み） |
| `npm run start` | ビルド済みアプリをローカルで起動 |
| `npm run lint` | ESLint でコードチェック |
<!-- /AUTO-GENERATED -->

---

## プロジェクト構成

<!-- AUTO-GENERATED -->
```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト、メタデータ、フォント設定
│   ├── page.tsx            # ホームページ（各コンポーネントを配置）
│   ├── globals.css         # Tailwind インポート、テーマカラー変数
│   └── shikaku/            # 資格サポートページ群
│       ├── page.tsx        # 資格トップ（2択：決まっている/まだ決まってない）
│       ├── quiz/
│       │   └── page.tsx    # 6問診断 → 上位3資格を提示
│       ├── plan/
│       │   └── page.tsx    # 学習計画テンプレ（5ステップ＋期間別プラン）
│       ├── popular/
│       │   └── page.tsx    # 人気資格一覧
│       └── interest/
│           └── page.tsx    # 興味別分類（6カテゴリ）
├── components/             # LP 用 React コンポーネント
│   ├── Nav.tsx             # ナビゲーションバー（固定ヘッダー）
│   ├── Hero.tsx            # ヒーローセクション（FV）
│   ├── Flow.tsx            # 診断フロー説明（3ステップ）
│   ├── ResultPreview.tsx   # 4つのタイプ診断プレビュー
│   ├── MidCTA.tsx          # 中間CTA
│   ├── GrowthPath.tsx      # 成長の3段階（循環ダイアグラム）
│   ├── Features.tsx        # 特徴ハイライト（4つ）
│   ├── Testimonials.tsx    # 体験者の声
│   ├── FAQ.tsx             # よくある質問（アコーディオン）
│   ├── CTA.tsx             # 最終CTA
│   ├── Footer.tsx          # フッター
│   └── ScrollEffects.tsx   # スクロールエフェクト
└── hooks/
    └── useScrollReveal.ts  # スクロール表示アニメーション用フック
```
<!-- /AUTO-GENERATED -->

### テーマカラー（globals.css）

| 変数 | 値 | 用途 |
|------|----|------|
| `--color-accent` | `#ff6b35` | メインアクセント（オレンジ） |
| `--color-accent-dark` | `#e85a24` | アクセントダーク |
| `--color-primary` | `#0a0a0a` | テキスト色 |
| `--color-muted` | `#999999` | 補助テキスト |
| `--color-surface` | `#ffffff` | 背景白 |
| `--color-bg` | `#f8f8f8` | 背景グレー |
| `--color-warm` | `#f5f0eb` | ウォームベージュ |

---

## 開発の進め方

[CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。

Claude Code を開いて作業を始めるだけで OK。Claude が手順をガイドします。

---

## デプロイ

`main` ブランチにマージされると、Vercel が自動でデプロイします。

- **本番URL**: https://kaiwai-black.vercel.app
- PR を作成すると **プレビューURL** が自動生成されます

手動でのデプロイ作業は不要です。

---

## ライセンス

未定
