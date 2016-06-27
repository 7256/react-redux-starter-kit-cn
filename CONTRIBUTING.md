# 贡献指南

一些基本的项目约定.

### 通用

请确定还没有已存在的提交请求尝试定位涉及的问题. 同样的, 请检查是否有更新的相关问题, 因为其他人可能已经在另一个分支上解决这个问题了.

* 大面积的变动应该先在一个问题中讨论好
* 在一个单独的分支中进行开发, 而不是在主分支上
* 你的评论应该言简意赅

### 代码校验

请在发布你的提交请求前使用 `npm run lint` 检查你的代码, 因为如果 `eslint` 失败的话 CI 构建系统也将失败.

### 提交信息格式

每个提交信息都应该包含 **类型**, **范围** 和 **主题**:

```
 <类型>(<范围>): <主题>
```

每行文字不应超过 100 个字符. 这将使信息在 GitHub 和不同的 git 工具中更易读, 同时生成一个美观整洁的提交日志信息, 例如:

```
 #271 feat(standard): add style config and refactor to match
 #270 fix(config): only override publicPath when served by webpack
 #269 feat(eslint-config-defaults): replace eslint-config-airbnb
 #268 feat(config): allow user to configure webpack stats output
```

#### 类型

必须是以下选项中的一个:

* **feat**: 新特性
* **fix**: 漏洞修复
* **docs**: 只有文档修改
* **style**: 不影响代码含义的变化 (空格、格式化、缺失分号等等)
* **refactor**: 既不是修复漏洞也不是添加特性的代码调整
* **test**: 添加缺失的测试用例
* **chore**: 改变构建过程或辅助工具和库，如文档生成

#### 范围

范围可以是任何用来区分提交变化位置的词. 例如 `webpack`、`babel`、 `redux` 等等...

#### 主题

主题中包含了关于变化的简介描述:

* 使用单数现在时: "change" 而不是 "changed" 也不是 "changes"
* 首字母不大写
* 结尾不需要点结束符(.)
