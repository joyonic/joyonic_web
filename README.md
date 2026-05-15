# Joyonic Web 项目说明

本项目是基于 React + Vite 的多语言展示网站。

## 1. 环境要求

- Node.js 20+（推荐使用 LTS 版本）
- npm 10+
- Git

可先检查版本：

```bash
node -v
npm -v
git --version
```

## 2. 本地部署（开发环境）

### 2.1 克隆仓库

```bash
git clone https://github.com/joyonic/joyonic_web.git
cd joyonic_web
```

### 2.2 安装依赖

```bash
npm install
```

### 2.3 启动开发服务器

```bash
npm run dev
```

启动后在浏览器访问终端输出中的地址（默认一般为 `http://localhost:5173`）。

## 3. 生产构建与本地预览

### 3.1 打包

```bash
npm run build
```

构建产物会输出到 `dist/` 目录。

### 3.2 本地预览构建结果

```bash
npm run preview
```

## 4. 分支协作规范

- `main`：线上发布分支（仅用于发布）
- `develop`：日常开发分支

建议流程：

1. 从 `develop` 拉取最新代码。
2. 在 `develop` 或功能分支开发并提交。
3. 通过 PR 合并到 `main` 后发布。

常用命令：

```bash
git checkout develop
git pull origin develop
```

## 5. 常见问题

- 端口被占用：
	重新启动后 Vite 会自动切换端口，按终端提示访问即可。
- 依赖安装失败：
	可先删除 `node_modules` 和 `package-lock.json` 后重新执行 `npm install`。

## 6. 项目主要命令

```bash
npm run dev      # 启动开发环境
npm run build    # 生产构建
npm run preview  # 预览构建结果
npm run lint     # 代码检查
```
