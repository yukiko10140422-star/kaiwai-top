# KAIWAI デザイン品質向上計画

> 監査日: 2026-04-09
> 目標: テンプレ感を脱却し、「信頼できる編集物」としての品質に引き上げる

---

## Phase 1: ビジュアル基盤（写真・背景・深度）

### 1-1. 全ページに写真を導入
各カテゴリトップページにヒーロー写真（半透明オーバーレイ付き）を追加。
サブページにもコンテキスト写真を配置。

| ページ | 写真の内容 | 配置 |
|---|---|---|
| `/` (トップ) | 既存 Unsplash（キャンパス） | Hero — 既存維持 |
| `/gakuchika` | チームでプロジェクトに取り組む学生 | ヘッダー背景 |
| `/gakuchika/projects` | ノートPCに向かう学生の手元 | ページ上部アクセント |
| `/gakuchika/flow` | ホワイトボードの前で議論する学生 | ステップ間の装飾 |
| `/gakuchika/portfolio` | ポートフォリオを見せ合う学生 | ページ上部 |
| `/ryugaku` | 空港・スーツケース・パスポート | ヘッダー背景 |
| `/ryugaku/prepare` | カフェで勉強する学生 | ページ上部 |
| `/ryugaku/countries` | 世界地図 or 都市風景のコラージュ | セクション間 |
| `/ryugaku/cafe` | カフェで談笑する多国籍の学生 | ヘッダー背景 |
| `/circle` | サークル活動中の学生グループ | ヘッダー背景 |
| `/circle/search` | 学園祭・文化祭の風景 | ページ上部 |
| `/circle/promote` | ポスターを貼る学生 | ページ上部 |
| `/circle/sports` | スポーツ中の学生 | ページ上部 |
| `/sonota` | 考え事をしている学生 | 背景（ぼかし） |

### 1-2. 背景のリズム改善
- カテゴリトップ: ヒーロー写真（暗めオーバーレイ） → 白 → warm → 白の交互
- サブページ: warm ヘッダーバンド → 白コンテンツ → warm フッター帯
- グラデーション: `linear-gradient(180deg, var(--color-warm) 0%, var(--color-surface) 100%)` をセクション冒頭に

### 1-3. 多層シャドウの全カード適用
```css
/* globals.css に追加 */
.card-shadow {
  box-shadow:
    rgba(0,0,0,0.04) 0px 4px 18px,
    rgba(0,0,0,0.027) 0px 2px 7.8px,
    rgba(0,0,0,0.02) 0px 0.8px 2.9px,
    rgba(0,0,0,0.01) 0px 0.2px 1px;
}
.card-shadow-hover {
  box-shadow:
    rgba(0,0,0,0.06) 0px 8px 28px,
    rgba(0,0,0,0.04) 0px 4px 12px,
    rgba(0,0,0,0.02) 0px 1px 4px;
}
.card-glow {
  box-shadow:
    0 0 0 1px rgba(255,107,53,0.24),
    0 8px 24px rgba(255,107,53,0.12);
}
```

---

## Phase 2: インタラクション（hover・scroll・transition）

### 2-1. Scroll Reveal アニメーション
- `IntersectionObserver` ベースのフェードイン
- 全セクションに `opacity: 0 → 1` + `translateY(20px → 0)` を 600ms で適用
- `prefers-reduced-motion` 対応

### 2-2. カード hover 効果
```css
.card-interactive {
  transition: transform 200ms cubic-bezier(0.16,1,0.3,1),
              box-shadow 200ms cubic-bezier(0.16,1,0.3,1),
              border-color 200ms;
}
.card-interactive:hover {
  transform: translateY(-2px);
  border-color: rgba(255,107,53,0.2);
}
```

### 2-3. ボタン hover
- Primary CTA: `translateY(-1px)` + shadow 強化 + `background` を accent-dark に
- Secondary: `background` を warm-dark に
- Ghost: `color` を accent に + underline

### 2-4. リンクカード hover（カテゴリトップの選択肢）
- border を `2px solid var(--color-border)` → `2px solid rgba(255,107,53,0.3)` に
- 薄い accent glow shadow を追加
- 右矢印アイコンを `translateX(4px)` で微移動

### 2-5. ページ遷移
- Next.js の `loading.tsx` にスケルトン or フェードを配置
- `View Transitions API` は将来検討（ブラウザ対応待ち）

---

## Phase 3: タイポグラフィ・色の統一

### 3-1. CSS ユーティリティクラス追加（globals.css）
```css
.heading-display {
  font-family: var(--font-serif);
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--color-primary);
}
.heading-section {
  font-family: var(--font-sans);
  font-weight: 800;
  line-height: 1.3;
  color: var(--color-primary);
}
.text-body {
  font-size: 16px;
  line-height: 1.75;
  color: var(--color-primary);
}
.text-muted {
  font-size: 14px;
  line-height: 1.75;
  color: var(--color-muted);
}
.text-caption {
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-muted);
}
```

### 3-2. ボタンクラス統一
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-accent);
  color: #fff;
  padding: 14px 28px;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 15px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(255,107,53,0.25);
  transition: all 200ms var(--ease-smooth);
  text-decoration: none;
}
.btn-primary:hover {
  background: var(--color-accent-dark);
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(255,107,53,0.3);
}
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-warm);
  color: var(--color-primary);
  padding: 14px 28px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 200ms var(--ease-smooth);
  text-decoration: none;
}
.btn-secondary:hover {
  background: var(--color-warm-dark);
}
```

### 3-3. カードクラス統一
```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: clamp(20px, 3vw, 28px);
}
.card-warm {
  background: var(--color-warm);
}
```

### 3-4. バッジクラス
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
  background: rgba(255,107,53,0.08);
  color: var(--color-accent-dark);
}
```

### 3-5. #666 → CSS変数に統一
全コンポーネントの `color: "#666"` を `color: "var(--color-muted)"` または新トークン `--color-body-light: #555` に統一。

---

## Phase 4: コンテンツ品質

### 4-1. 体験談の具体化
各カテゴリに 2-3 件の体験談を追加。全て以下のフォーマット:
- 具体的な数字（フォロワー○人、○点UP、○人参加）
- Before → After の変化
- 感情の変化（不安→自信）

### 4-2. 統計数字の信憑性
- トップ Hero の数字: "1,200+" → 実績に基づくか、注釈「2026年4月時点」を追加
- MVP 段階では「※モック数値です」の表示も誠実な選択肢

### 4-3. CTA コピーの強化
| 現状 | 改善案 |
|---|---|
| "無料で診断する" | "3分で自分のタイプを知る（無料）" |
| "始める" | "まずはヒアリングに申し込む（無料・15分）" |
| "詳しく見る" | "プロジェクト一覧を見る" |

### 4-4. 各プロジェクトカードに体験者の一言を追加
> 「SNS運用を3ヶ月やって、フォロワー500人達成。面接で自信を持って話せました」— 大学2年

---

## Phase 5: モバイル・レスポンシブ

### 5-1. タッチターゲット
- 全クリッカブル要素の最小サイズを 44x44px に保証
- リンクカードの padding を `28px 24px` 以上に
- Nav のモバイルメニュー項目を `padding: 16px 24px` に

### 5-2. レスポンシブ見直し
- Features: `grid-cols-2` → `max-md:grid-cols-1`（確認済み、一部未適用の箇所あり）
- Testimonials: 同上
- `/circle/promote`: 2 列グリッド → モバイル 1 列

### 5-3. フォントサイズ
- Hero 見出し: `clamp(32px, 4.5vw, 56px)` — 既存、維持
- カテゴリトップのタイトル: `clamp(20px, 4vw, 28px)` に統一

---

## Phase 6: Nav・Footer・横断リンク

### 6-1. Nav のカテゴリメニュー化
現状: セクション内リンク（#flow, #types 等）のみ
改善: 「カテゴリ」ドロップダウンを追加
```
ガクチカ | 留学 | 資格 | サークル | まだ決まっていない
```

### 6-2. Footer のサイトマップ化
```
KAIWAI
├── ガクチカ — プロジェクト一覧 | 参加の流れ | ポートフォリオ
├── 留学 — 英語学習 | 国選び | 英語カフェ
├── 資格 — 資格診断 | 人気資格 | 学習計画
├── サークル — サークル検索 | 集客支援 | スポーツ
└── タイプ診断
```

### 6-3. パンくずリスト
各サブページに `トップ > ガクチカ > プロジェクト一覧` のパンくず。

---

## 実行順序

```
Phase 1（ビジュアル基盤）
  ├── 1-1 写真導入（全ページ）
  ├── 1-2 背景リズム改善
  └── 1-3 シャドウシステム
        ↓
Phase 2（インタラクション）
  ├── 2-1 Scroll Reveal
  ├── 2-2 カード hover
  ├── 2-3 ボタン hover
  └── 2-4 リンクカード hover
        ↓
Phase 3（統一性）── 並行可
  ├── 3-1 タイポグラフィクラス
  ├── 3-2 ボタンクラス
  ├── 3-3 カードクラス
  └── 3-5 色の統一
        ↓
Phase 4（コンテンツ）── 並行可
  ├── 4-1 体験談具体化
  ├── 4-2 数字の注釈
  └── 4-3 CTA コピー強化
        ↓
Phase 5（モバイル）
  ├── 5-1 タッチターゲット
  └── 5-2 レスポンシブ修正
        ↓
Phase 6（横断リンク）
  ├── 6-1 Nav カテゴリメニュー
  ├── 6-2 Footer サイトマップ
  └── 6-3 パンくずリスト
```

---

## PR 戦略

| PR | Phase | 内容 |
|---|---|---|
| PR 1 | 3 | globals.css に統一クラス追加（btn, card, badge, heading, shadow） |
| PR 2 | 1 + 2 | 全ページに写真・背景・hover・scroll reveal 導入 |
| PR 3 | 4 | コンテンツ品質向上（体験談・CTA・数字） |
| PR 4 | 5 | モバイル・レスポンシブ修正 |
| PR 5 | 6 | Nav・Footer・パンくず |

---

Last updated: 2026-04-09
