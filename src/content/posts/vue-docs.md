---
title: 使用Vue搭建文档
published: 2025-08-29
updated: 2025-08-29 09:49:00
description: '这是官方 Vue 文档的 VitePress 主题，地址：https://vuejs.org'
image: 'https://cn.vuejs.org/logo.svg'
tags: [Vue]
category: 'VitePress'
draft: false 
pinned: false
---
# 介绍
这是官方 Vue 文档的 VitePress 主题，地址：https://vuejs.org

# 开始搭建
1.安装node.js：
> 下载地址：https://nodejs.org

2. 克隆存储库： （两个都要）
``` bash
git clone git@github.com:vuejs/docs.git
git clone git@github.com:vuejs/theme.git
```
3. 安装依赖：
> 在 `theme` 文件夹中：
``` bash
# In ./theme
pnpm install
# Make @vue/theme available for global linking
pnpm link --global
```
> 在 `docs` 文件夹中：
``` bash
# in ./docs
pnpm install
# Link theme
pnpm link --global @vue/theme
```
3. 启动预览：
> 在 `docs` 文件夹中：
``` bash
# in ./docs
pnpm dev
```

# 可用命令：
``` bash
# 启动本地开发服务器。
pnpm dev

# 构建演示，然后在本地服务。这是用于测试的
# 本地环境中的生产构建。
pnpm serve

# 通过 Prettier 运行 lint。
pnpm lint

# 通过 tsc 运行类型检查。
pnpm type
```
# 参考：
::github{repo="vuejs/theme"}