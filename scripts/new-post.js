/* This is a script to create a new post markdown file with front-matter */

import { time, timeLog, timeStamp } from "console"
import fs from "fs"
import { getDefaultAutoSelectFamily, getDefaultAutoSelectFamilyAttemptTimeout } from "net"
import path from "path"

function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

const args = process.argv.slice(2)

if (args.length === 0) {
  console.error(`错误：未提供文件名参数
用法：npm run new-post -- <filename>`)
  process.exit(1) // Terminate the script and return error code 1
}

let fileName = args[0]

// Add .md extension if not present
const fileExtensionRegex = /\.(md|mdx)$/i
if (!fileExtensionRegex.test(fileName)) {
  fileName += ".md"
}

const targetDir = "./src/content/posts/"
const fullPath = path.join(targetDir, fileName)

if (fs.existsSync(fullPath)) {
  console.error(`Error: File ${fullPath} already exists `)
  process.exit(1)
}

// recursive mode creates multi-level directories
const dirPath = path.dirname(fullPath)
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
}

const content = `---
title: ${args[0]}
published: ${getDate()}
updated: ${getDate()} 需要自己填现在时间
description: ''
image: ''
tags: []
category: ''
draft: false 
pinned: false
---
`

fs.writeFileSync(path.join(targetDir, fileName), content)

console.log(`文章 ${fullPath} 创建成功！`)
