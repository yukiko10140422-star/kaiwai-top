# KAIWAI LP デザイン改良計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** デザイン監査で特定された問題を修正し、LPのコンバージョン率とユーザー体験を向上させる

**Architecture:** Tailwind v4の任意値クラスが動作しない問題を前提に、全スペーシング・フォントサイズをインラインstyleで制御。デザイン原則（視覚階層・タイポグラフィ・色彩・余白）に基づいた体系的改善。

**Tech Stack:** Next.js 16, Tailwind CSS v4, TypeScript, Material Symbols Outlined, Google Fonts (Noto Sans JP + Inter)

---

## デザイン監査レポート

### 総合スコア: 5.8 / 10

| 項目 | スコア | 優先度 |
|------|--------|--------|
| 視覚階層 | 6/10 | HIGH |
| タイポグラフィ | 5/10 | HIGH |
| 色彩 | 7/10 | MEDIUM |
| 余白・レイアウト | 5/10 | HIGH |
| 一貫性 | 6/10 | MEDIUM |
| アクセシビリティ | 4/10 | HIGH |
| 感情的インパクト | 5/10 | HIGH |
| ユーザビリティ | 7/10 | MEDIUM |

### 主な強み
- CTAボタンのデザイン（グラデーション・影・hover効果）は良好
- Flowセクションの3ステップ構造は論理的で分かりやすい
- FAQ のアコーディオンUIは機能的

### 致命的問題
1. **11px以下のテキストが10箇所以上** — モバイルで読めない
2. **セクション間の視覚的リズムが不均一** — 背景色の切り替えが不規則
3. **デスクトップでの空白が過剰** — HeroとFlowの間、GrowthPathの後に巨大な空白
4. **写真の質** — ストック感が強く、ターゲット（日本の学生）との乖離
5. **Empathy chipsがHero上部で視認性が低い** — 背景と同化

---

## 修正方針（デザイン原則に基づく）

### タイポグラフィスケール（8px基準のモジュラースケール）
```
ラベル/キャプション: 12px（最小）→ 現在11pxの箇所を全て引き上げ
本文: 14-15px
小見出し: 16-18px
セクション見出し: 22-26px（モバイル）/ 28-36px（デスクトップ）
Hero見出し: 28-32px（モバイル）/ 40-48px（デスクトップ）
line-height: 本文1.7-1.8、見出し1.35-1.45
```

### スペーシングスケール（8px基準）
```
要素内padding: 16-24px
カード内padding: 24-32px
セクション間: 80px（モバイル）/ clamp(80px, 10vw, 140px)（デスクトップ）
見出し下マージン: 24-32px
要素間gap: 12-16px
```

### 背景色のリズム（交互配置）
```
Hero: white
Flow: bg-alt (#f7f7f8)
Categories: white
GrowthPath: bg-alt (#f7f7f8)
Features: white
Testimonials: bg-alt (#f7f7f8)
FAQ: white
CTA: accent gradient
Footer: bg-alt
```

---

## Task 1: グローバルCSS — タイポグラフィ・余白・背景リズムの基盤

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: section-spacingをモバイル80px・デスクトップclampに拡大**

```css
/* 変更: .section-spacing */
.section-spacing {
  padding-top: clamp(80px, 10vw, 140px);
  padding-bottom: clamp(80px, 10vw, 140px);
}

@media (max-width: 768px) {
  .section-spacing {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
```

- [ ] **Step 2: 最小フォントサイズのベースライン追加**

```css
/* 追加: モバイル最小フォントサイズ */
@media (max-width: 768px) {
  body {
    font-size: 15px;
  }
}
```

- [ ] **Step 3: セクション見出しの統一スタイル追加**

```css
/* 追加: セクション見出し共通 */
.section-heading {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .section-heading {
    font-size: 24px;
    margin-bottom: 28px;
  }
}
```

- [ ] **Step 4: ビルド確認 → コミット**

```bash
npm run build
git add src/app/globals.css
git commit -m "globals.css: タイポグラフィ・余白・見出しスケール改善"
```

---

## Task 2: Hero — empathy chips視認性・見出し階層・空白改善

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: empathy chipsのサイズ・コントラスト改善**

現在: 背景rgba(0,0,0,0.04)に11pxテキスト → 読めない
変更: 背景をaccentの薄い色に、文字を13px、padding拡大

```tsx
// chips: style={{ fontSize: 13, padding: '6px 16px' }}
// 背景: bg-[rgba(var(--accent-rgb),0.08)] → より目立つ
// テキスト色: text-accent-dark
```

- [ ] **Step 2: 見出し上の空白を削減（navとの間隔）**

デスクトップ: empathy chipsの上paddingを80pxに減らす
モバイル: paddingTopを60pxに

- [ ] **Step 3: 信頼シグナル（3分で完了等）のフォントサイズ12px→13pxに**

- [ ] **Step 4: 統計カード「87%の学生が」のフォントサイズ11px→13pxに**

- [ ] **Step 5: ビルド確認 → コミット**

---

## Task 3: Flow — 背景色追加・カード内余白・ラベル文字サイズ

**Files:**
- Modify: `src/components/Flow.tsx`

- [ ] **Step 1: セクション背景をbg-altに変更（交互リズム）**

```tsx
<section className="section-spacing bg-bg-alt" id="flow">
```

- [ ] **Step 2: バッジ「所要時間 3分」「すぐに行動開始できる」のフォントサイズ11px→12px**

```tsx
style={{ fontSize: 12 }}
```

- [ ] **Step 3: Flowカード外側のmaxWidthを640pxに拡大（モバイルでの窮屈さ解消）**

- [ ] **Step 4: ビルド確認 → コミット**

---

## Task 4: Categories — セクション間の余白・カードのテキスト視認性

**Files:**
- Modify: `src/components/Categories.tsx`

- [ ] **Step 1: カードの説明テキスト視認性改善**

テキストオーバーレイの背景グラデーションを強化して文字を読みやすく

- [ ] **Step 2: YOUR TYPEラベルのフォントサイズ11px→12px**

- [ ] **Step 3: ビルド確認 → コミット**

---

## Task 5: GrowthPath — Connectorラベル・ステージラベル文字サイズ

**Files:**
- Modify: `src/components/GrowthPath.tsx`

- [ ] **Step 1: ステージラベル（Youth/Amateur/Pro）10px→12pxに**

```tsx
// font-display text-[10px] → style={{ fontSize: 12 }}
```

- [ ] **Step 2: Connectorラベル「経験を積んで」「さらに挑戦して」11px→13pxに**

- [ ] **Step 3: GROWTH STORYラベル11px→12pxに**

- [ ] **Step 4: セクション下のまとめ文13px→14pxに、line-height 1.8→2.0に**

- [ ] **Step 5: ビルド確認 → コミット**

---

## Task 6: Features — 背景色切り替え不要（白のまま）・アイコンサイズ調整

**Files:**
- Modify: `src/components/Features.tsx`

- [ ] **Step 1: アイコンの丸背景サイズをモバイルで統一（48px）**

現在: max-md:w-12 max-md:h-12 → 確実にインラインstyleで48px

- [ ] **Step 2: カードタイトルのフォントサイズ統一（16px）**

- [ ] **Step 3: ビルド確認 → コミット**

---

## Task 7: Testimonials — 背景色追加・引用文の読みやすさ改善

**Files:**
- Modify: `src/components/Testimonials.tsx`

- [ ] **Step 1: セクション背景をbg-altに（交互リズム）**

```tsx
<section className="section-spacing bg-bg-alt" id="testimonials">
```

- [ ] **Step 2: VOICEラベル11px→12px、見出しにsection-headingクラス適用**

- [ ] **Step 3: 引用文のフォントサイズ確認、最低14px保証**

- [ ] **Step 4: ビルド確認 → コミット**

---

## Task 8: FAQ — 質問文・回答文のフォントサイズ

**Files:**
- Modify: `src/components/FAQ.tsx`

- [ ] **Step 1: 質問文のフォントサイズ確認（最低15px）**

- [ ] **Step 2: 回答文のフォントサイズ確認（最低14px）、line-height 1.8**

- [ ] **Step 3: ビルド確認 → コミット**

---

## Task 9: CTA — アクセントグラデーション背景・コントラスト改善

**Files:**
- Modify: `src/components/CTA.tsx`

- [ ] **Step 1: 信頼シグナルの文字をさらに読みやすく（13px、色を#777に）**

- [ ] **Step 2: CTA画像の高さをモバイルで220pxに拡大**

- [ ] **Step 3: ビルド確認 → コミット**

---

## Task 10: Footer — paddingBottom調整（固定CTAバーとの重なり回避）

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: paddingBottomを100pxに拡大（固定CTAバーの高さ分）**

- [ ] **Step 2: ビルド確認 → コミット**

---

## Task 11: デスクトップレイアウト修正

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/GrowthPath.tsx`

- [ ] **Step 1: Hero デスクトップでテキスト左側の余白調整**

現在: テキストが左に寄りすぎ。container-innerの最大幅を確認し、テキスト側にpadding-left追加

- [ ] **Step 2: GrowthPath デスクトップでカードの最大幅を600pxに拡大**

- [ ] **Step 3: ビルド確認 → コミット**

---

## Task 12: 最終検証

- [ ] **Step 1: モバイル（390px）で全セクションスクリーンショット**
- [ ] **Step 2: デスクトップ（1440px）で全セクションスクリーンショット**
- [ ] **Step 3: 11px以下のテキストが0件であることを確認**
- [ ] **Step 4: 全セクションのpadding値が80px以上であることを確認**
- [ ] **Step 5: Lighthouse アクセシビリティスコア確認**
- [ ] **Step 6: 最終コミット＆push**

---

## 参照デザイン原則

| 原則 | 出典 | 適用箇所 |
|------|------|---------|
| 8px グリッドシステム | Material Design | 全スペーシング |
| モジュラータイポグラフィスケール | Massimo Vignelli | フォントサイズ体系 |
| 60-30-10 色彩配分 | デザイン基礎理論 | 背景色の交互配置 |
| ゲシュタルト近接の法則 | LibreUI design-mastery | カード内グルーピング |
| WCAG AA コントラスト比 4.5:1 | アクセシビリティ基準 | 11px以下テキスト全廃 |
| F型視線パターン | Nielsen Norman Group | Hero〜CTAの情報配置 |
| 最小タッチターゲット 44x44px | Apple HIG / Material | CTAボタン・FAQ項目 |
