# KAIWAI サイト全体レイアウト修繕計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** モバイル・デスクトップ両方でレイアウト崩れ・文字被り・不自然な表示を完全に解消し、プロダクション品質にする

**Architecture:** Tailwind v4の任意値クラス（`py-[18px]`等）が`translate`系と競合する問題が根本原因。全コンポーネントで「レイアウト系はインラインstyle、装飾系はTailwind標準クラス」に統一する。アニメーションは簡素化してSSR初期表示問題を解消する。

**Tech Stack:** Next.js 16, Tailwind CSS v4, TypeScript, Material Symbols Outlined

---

## 根本方針

### CSS使い分けルール（全タスク共通）
- **レイアウト（padding, margin, gap, width, height）**: インラインstyle `style={{ }}` を使用
- **装飾（色, 角丸, フォント, ボーダー）**: Tailwind標準クラス（任意値なし）を使用
- **レスポンシブ**: `@media(max-width:768px)` はglobals.cssに定義、コンポーネントではクラス切り替え
- **アニメーション**: globals.cssに定義。コンポーネントではクラスのtoggleのみ

### セクション間余白の統一値
- デスクトップ: `padding: 80px 0` → `120px 0`（clamp使用）
- モバイル: `padding: 48px 0` → `64px 0`
- globals.cssに `.section-spacing` クラスを定義して全セクション適用

---

## Task 1: globals.css にレイアウト基盤クラスを追加

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: セクション余白・コンテナ・アニメーション簡素化のCSS追加**

```css
/* Section spacing - consistent across all sections */
.section-spacing {
  padding-top: clamp(64px, 8vw, 120px);
  padding-bottom: clamp(64px, 8vw, 120px);
}

@media (max-width: 768px) {
  .section-spacing {
    padding-top: 48px;
    padding-bottom: 48px;
  }
}

/* Simple fade-in (replaces complex data-reveal) */
.fade-in {
  opacity: 1;
  transform: none;
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in--hidden {
  opacity: 0;
  transform: translateY(20px);
}
```

- [ ] **Step 2: data-revealアニメーションを簡素化**

既存の `[data-reveal]` CSSルールを削除し、上記の `.fade-in` に置き換え。
`[data-stagger]` も削除。

- [ ] **Step 3: ヒーローアニメーション関連CSSの整理**

`.empathy-chip.in`, `.hero-line-inner.in` 等の個別ルールを全て削除。
ヒーローは即表示（アニメーションなし）に変更。

- [ ] **Step 4: ビルド確認**

Run: `npx next build`
Expected: ビルド成功

- [ ] **Step 5: コミット**

```bash
git add src/app/globals.css
git commit -m "globals.css: セクション余白統一・アニメーション簡素化"
```

---

## Task 2: Hero コンポーネント全面書き直し

**Files:**
- Modify: `src/components/Hero.tsx`

**設計:**
- `"use client"` と `useEffect` によるアニメーションを**全削除**
- 全要素を即表示（SSRでもクライアントでも同じ表示）
- レイアウトはインラインstyle
- 装飾はTailwind標準クラスのみ

- [ ] **Step 1: Hero.tsxを書き直し**

構造:
```
<section style={{ paddingTop: 100px, paddingBottom: 60px }}>
  <div className="container-inner">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48px }}>
      <!-- 左: テキスト -->
      <div>
        empathy chips (font-size: 13px, padding: 8px 16px, 背景: 薄オレンジ)
        h1 見出し (font-size: clamp(28px,3.5vw,44px))
        p サブテキスト
        CTAボタン (padding: 18px 40px, インラインstyle)
        信頼シグナル (2x2 grid on mobile, flex on desktop)
      </div>
      <!-- 右: 写真グリッド -->
      <div>
        写真3枚グリッド + フロートカード
      </div>
    </div>
  </div>
</section>
```

**モバイル対応:**
- `gridTemplateColumns: '1fr'` （CSSメディアクエリでglobals.cssに定義）
- empathy chips: `font-size: 13px` 固定
- CTAボタン: `width: 100%`
- 信頼シグナル: 2x2 grid

- [ ] **Step 2: `"use client"` を削除してサーバーコンポーネント化**

ヒーローにインタラクションがなくなるため、`"use client"` と `useState`, `useEffect`, `useRef` を全て削除。

- [ ] **Step 3: モバイル390px / デスクトップ1440pxでの表示確認**

Run: `npx next build`
Expected: ビルド成功

- [ ] **Step 4: コミット**

```bash
git add src/components/Hero.tsx
git commit -m "Hero: 全面書き直し - アニメーション削除・インラインstyleでレイアウト安定化"
```

---

## Task 3: Flow コンポーネントのレイアウト修正

**Files:**
- Modify: `src/components/Flow.tsx`

- [ ] **Step 1: Flowカードの幅をインラインstyleで制御**

```tsx
<div style={{ maxWidth: 600, margin: '0 auto' }}>
  {/* 3ステップ */}
</div>
```

- [ ] **Step 2: フローステップのborder-leftをインラインstyleに統一**

Step1: `borderLeft: '3px solid #ff6b35'`
Step2: `borderLeft: '3px solid #3b82f6'`
Step3: `borderLeft: '3px solid #22c55e'`

- [ ] **Step 3: data-revealをfade-inクラスに置き換え（またはアニメーション削除）**

- [ ] **Step 4: ビルド確認・コミット**

```bash
git add src/components/Flow.tsx
git commit -m "Flow: レイアウト安定化 - インラインstyle統一"
```

---

## Task 4: Categories 横スクロールのモバイル改善

**Files:**
- Modify: `src/components/Categories.tsx`

- [ ] **Step 1: モバイルで2枚目がチラ見えするようカード幅調整**

カード幅: `minWidth: 'calc(100vw - 80px)'` → 画面幅より少し小さく
左右スペーサー: `width: 20px`

- [ ] **Step 2: 横スクロールのスナップ動作追加**

```css
scroll-snap-type: x mandatory;
scroll-snap-align: start; /* 各カードに */
```

- [ ] **Step 3: ビルド確認・コミット**

```bash
git add src/components/Categories.tsx
git commit -m "Categories: モバイル横スクロール改善"
```

---

## Task 5: GrowthPath セクション間余白・区切り修正

**Files:**
- Modify: `src/components/GrowthPath.tsx`

- [ ] **Step 1: section-spacingクラスを適用**

- [ ] **Step 2: コネクタ矢印のスタイル修正**

矢印「↓」がカードの縦線と離れている問題を修正。`margin` と `position` をインラインstyleで調整。

- [ ] **Step 3: チップのfont-sizeをモバイルで14pxに拡大**

- [ ] **Step 4: ビルド確認・コミット**

```bash
git add src/components/GrowthPath.tsx
git commit -m "GrowthPath: 余白統一・チップサイズ拡大"
```

---

## Task 6: Features / Testimonials / FAQ / CTA / Footer の微修正

**Files:**
- Modify: `src/components/Features.tsx`
- Modify: `src/components/Testimonials.tsx`
- Modify: `src/components/FAQ.tsx`
- Modify: `src/components/CTA.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: 全セクションに section-spacing クラスを適用**

- [ ] **Step 2: Features - アイコン丸背景のサイズをモバイルで縮小**

デスクトップ: `width: 56px, height: 56px`
モバイル: `width: 44px, height: 44px`

- [ ] **Step 3: Testimonials - アバター画像サイズ拡大**

`width: 48px, height: 48px` → `width: 56px, height: 56px`

- [ ] **Step 4: CTA - モバイルで画像はみ出し修正**

```tsx
style={{ maxHeight: 240, objectFit: 'cover', borderRadius: 16 }}
```

- [ ] **Step 5: Footer - 固定CTAとの重なり回避パディング**

モバイルでfooterに `paddingBottom: 80px` 追加

- [ ] **Step 6: ビルド確認・コミット**

```bash
git add src/components/Features.tsx src/components/Testimonials.tsx src/components/FAQ.tsx src/components/CTA.tsx src/components/Footer.tsx
git commit -m "Features/Testimonials/FAQ/CTA/Footer: セクション余白統一・細部修正"
```

---

## Task 7: page.tsx と ScrollEffects の整理

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/ScrollEffects.tsx`
- Modify: `src/hooks/useScrollReveal.ts`

- [ ] **Step 1: ScrollEffects をシンプルなスクロールプログレスバーのみに**

`useScrollReveal` のIntersectionObserver（data-reveal監視）を削除。
スクロールプログレスバー機能のみ残す。

- [ ] **Step 2: page.tsx の各セクションからdata-reveal属性を削除**

- [ ] **Step 3: MobileFixedCTA の表示ロジック確認**

スクロール量に応じた表示/非表示は `useEffect` で維持（これは`"use client"`が必要）。

- [ ] **Step 4: ビルド確認・コミット**

```bash
git add src/app/page.tsx src/components/ScrollEffects.tsx src/hooks/useScrollReveal.ts
git commit -m "ScrollEffects/page.tsx: data-reveal削除・スクロールプログレスのみ残す"
```

---

## Task 8: 写真URL差し替え（日本人学生写真）

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Categories.tsx`
- Modify: `src/components/CTA.tsx`
- Modify: `src/components/Testimonials.tsx`

- [ ] **Step 1: Unsplash/Pexelsから日本人・アジア人学生の写真URLを選定**

WebSearchでより適切な写真を検索。
選定基準: 日本の大学キャンパス、アジア人学生、自然な表情、高解像度

- [ ] **Step 2: 各コンポーネントの画像URLを差し替え**

- [ ] **Step 3: ビルド確認・コミット**

```bash
git add src/components/Hero.tsx src/components/Categories.tsx src/components/CTA.tsx src/components/Testimonials.tsx
git commit -m "写真差し替え: 日本人学生のフリー素材に変更"
```

---

## Task 9: 最終検証 - モバイル・デスクトップ全セクション

**Files:** なし（検証のみ）

- [ ] **Step 1: Playwrightで390x844（モバイル）の全セクションスクリーンショット**

各セクションを個別にスクリーンショット。
文字被り・要素はみ出し・余白の不統一がないか確認。

- [ ] **Step 2: Playwrightで1440x900（デスクトップ）の全セクションスクリーンショット**

同様に確認。

- [ ] **Step 3: 問題があれば修正**

- [ ] **Step 4: Vercelにデプロイ**

```bash
git push
```
（Vercel自動デプロイ）

- [ ] **Step 5: 本番URL（kaiwai-black.vercel.app）で最終確認**
