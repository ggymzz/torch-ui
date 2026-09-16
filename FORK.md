# FORK.md — 本项目内 fork 的维护契约

> 本目录是 `@torch-ui/solid` 在 ShopFaaS monorepo 内的 fork，作为 workspace 成员被消费。
> 本文档说明它与上游的关系、差异范围、以及日常维护必须遵守的契约。
>
> 最后更新：2026-09-16

---

## 1. 为什么会有这个 fork

上游 `sean-dowd-sr/torch-ui` **自 2026-04-29 起停止提交**，npm 最新版 `0.6.20` 即为终点。

项目需要的可访问性 / 国际化 / 焦点管理修复上游无人响应——已向作者提交 3 个 PR
（#1 `2026-07-19`、#2 `2026-07-25`、#3 `2026-08-06`），全部 `open`、`merged_at: null`，
最新一个已悬置 40 天。因此在 `ggymzz/torch-ui` 建立正式 fork 自持。

**上游已停更这件事不全是坏事**：它意味着不会再有破坏性变更，版本可长期冻结，
维护成本只取决于「项目自身需要的修复」，而非「跟随上游」。

---

## 2. 仓库关系

| 角色 | 地址 |
|---|---|
| 本 fork 远端（`origin`） | `https://github.com/ggymzz/torch-ui` |
| 上游（`upstream`） | `https://github.com/sean-dowd-sr/torch-ui` |
| 工作分支 | `fork/release` |
| monorepo 中的位置 | 仓库根 `torch-ui-fork/`，在根 `package.json` 的 `workspaces` 中 |

消费方（三处均声明 `"@torch-ui/solid": "workspace:*"`，走 workspace 链接）：

- `shopfaas-store`
- `shopfaas-suite`
- `packages/spa-shared`（`dependencies` + `peerDependencies`）

### 仓库历史形态

本仓库是**浅历史**：全库仅 12 个提交 = 上游快照 1 个（`2bd0573`，对应上游 0.6.20）
+ 本项目开发提交 11 个（2026-08-06 → 2026-09-09）。
上游的完整提交历史不在本地。

---

## 3. 与上游的差异

以 `upstream/main` 为基线：

```
78 files changed, 3093 insertions(+), 1677 deletions(-)
```

其中 `src/` 部分 **45 个文件**（含新增 `src/utilities/localeContext.ts`），
其余为 `dist/` 构建产物、测试、`skill/reference` 文档与 CHANGELOG。

### A 类 · 通用修复（上游本该接收）

- a11y / i18n 打包修复：Pagination、Select、DataTable、Drawer、Autocomplete、FileUpload
- Dialog 打开时聚焦首个可聚焦元素
- FileUpload 对话框关闭后焦点恢复到触发按钮
- 受控 Select 值置空时清除 trigger 残留旧值；新增 `clearable` 一键清除
- Select / MultiSelect 选项与值同时变更时的更新循环
- Autocomplete：`defaultFilter`、`noResetInputOnBlur`、`onCloseAutoFocus`、`triggerMode`、
  `id` / `aria-label` / `aria-labelledby` 转发
- `data-kb-top-layer`：修复 modal Dialog 内 portal 内容的 aria-hidden 焦点冲突
- Badge 可访问性默认行为

### B 类 · 项目新增能力

- **`LocaleProvider`**（`src/utilities/localeContext.ts`）— 组件内置文案的上下文
- Select / Autocomplete 标签行距对齐 `Input`（`mb-2` → `mb-1.5`）
- DatePicker `min` / `max` 在 render 内读取，消除 createRoot 外计算警告

### C 类 · 工程

- `@kobalte/core` 0.13.11 → 0.13.14 及 Checkbox 类型兼容
- 打包产物 chunk 引用路径更新

---

## 4. 版本与发布策略

- 上游版本线**冻结在 `0.6.20`，不再跟随**。
- monorepo 内消费走 `workspace:*`，**不需要发布**即可生效。
- 若需对外发布（私有 registry），版本号使用 `0.6.2x-<项目标识>.<n>` 形式，
  避免与上游语义冲突，例如 `0.6.21-shopfaas.1`。

---

## 5. 维护契约（改组件前必读）

改动 `src/` 下任何组件时，按此顺序执行：

**① 读约定**

- `CONTRIBUTING.md` — 组件开发规范（色彩 token / focus ring / a11y）
- `skill/SKILL.md` — 导入规范、compound component、providers、MCP 工作流

**② 读组件 API**

`skill/reference/<category>/<Component>.md` — 95 篇组件文档，
含 props / exports / 类型定义。**不要靠猜**。

`doc_id` 格式为 `{category}/{Component}`，category 取值：
`actions` `charts` `data-display` `feedback` `forms` `layout` `navigation` `overlays` `typography`。

**③ 改代码** — 遵守 `CONTRIBUTING.md` 的三条硬规则：

- 只用设计 token（`surface-*` / `text-ink-*` / 语义色），**禁止** raw Tailwind 颜色类
- 交互元素用 `outline-none focus-visible:ring-2`（**无** `ring-offset`）；
  表单字段用 `focus:ring-2 focus:ring-inset`
- `aria-hidden` 必须用字符串 `"true"`，**不用**布尔 `{true}`；
  纯图标交互元素必须有 `aria-label` / `title` / `aria-labelledby`

**④ 同步文档**

```bash
bun run skill/scripts/extract-api.ts    # 从源码重新生成 API 参考
```

受影响的 `skill/reference/*.md` 需一并提交（现有提交是范本）。

**⑤ 写 CHANGELOG**

在 `CHANGELOG.md` 的 `## [Unreleased]` 段落按 `Added` / `Changed` / `Fixed` / `Removed`
分类记录，**写清根因而不只是现象**（现有条目是范本）。

**⑥ 验证**

```bash
npm run typecheck    # tsc --noEmit
npm run test         # vitest run
```

涉及交互 / 焦点 / 可访问性的改动，还应在消费方（`shopfaas-store` 或 `shopfaas-suite`）
实跑验证，不要只看单测。

**⑦ 提交**

提交信息格式：`type(scope): 中文描述`，与现有 11 个提交保持一致。

---

## 6. dist 与提交策略

上游在 `chore: include dist for github installs` 之后**将 `dist/` 纳入版本控制**，
目的是让 `github:` 协议的安装方式可用。本项目在 monorepo 内消费走 workspace 源码，
理论上不需要提交 dist。

**现状**：`dist/` 仍为 tracked，每次 `npm run build` 都会产生大量 diff，
提交历史噪音偏大（本次相对上游的 78 个改动文件中，32 个是 dist 产物）。

**待决策**：若确认本项目只用 workspace 消费、不再用 `github:` 安装，可执行

```bash
git rm -r --cached dist/
```

停止跟踪构建产物。`.gitignore` 中已有 `dist/` 规则，只是对已 tracked 文件不生效。

---

## 7. 环境恢复

**注意：本目录被父仓库 `.gitignore:135` 忽略，且未登记为 submodule。**
父仓库 clone 后本目录为空，需单独获取：

```bash
cd <repo-root>
git clone https://github.com/ggymzz/torch-ui.git torch-ui-fork
cd torch-ui-fork
git checkout fork/release
npm install          # 安装组件库自身依赖（构建 / 测试用）
cd ..
bun install          # monorepo 侧链接 workspace
```

---

## 8. 分支现状

| 分支 | 状态 | 处置 |
|---|---|---|
| `fork/release` | 工作分支，与 `origin` 完全同步（ahead/behind = 0/0） | **在用，保留** |
| `main` | 等于上游快照 `2bd0573` | 保留（作为上游基线） |
| `pr/upstream-a11y-i18n-fixes` | `fork/release` 的前 4 个提交（`f848cfc`→`1b7e595`），对上游仍有价值 | **保留**（是给上游的 PR 分支） |
| `fix/a11y-i18n-and-component-fixes` | 2026-07 ~ 08 的开发线，18 个提交 | 建议归档 |
| `fix/pagination-a11y-i18n-and-kobalte-select-bug` | 同上，10 个提交 | 建议归档 |
| `fix/drawer-detail-no-cancel` | 同上，1 个提交 | 建议归档 |

三个 `fix/*` 分支的成果已收口进 `fork/release`——以 2026-08-06 的
`f848cfc fix(a11y,i18n): bundle accessibility, i18n, and component behavior fixes`
为起点重新整理为 11 个干净的提交。

**已核查**：这三个分支与 `fork/release` 的剩余差异为「旧版本内容 + 格式噪音」。
典型如 `TreeView.tsx` 的 418 行差异，实为引号 / 缩进 / 分号的全量格式化差异
（分支上跑了 Prettier，`fork/release` 保留了上游原始风格），**非功能差异**。

> 归档前建议先确认：这三个分支是否还有需要保留的、`fork/release` 中不存在的功能改动。

---

## 9. 已知边界

- 组件总数 99 个、约 26,000 行，**这部分代码无需我们维护**——它们是上游的成果。
  我们的维护面是相对上游的那批改动（`src/` 45 个文件）。
- 上游已停更，不会有新功能或破坏性变更，因此**不设「跟随上游」的工作项**。
- 只发 dist + styles 到 npm（`package.json` 的 `files` 字段不含 `src`），
  所以 **npm 安装方式拿不到源码**，本项目必须用 workspace 或 git 方式消费。
