# bizarre-ui

_该组件库采用 `Vue3@3.3.4 `+ `TypeScript@4.7.4` + `Vite4.4.7` + `Less@4.1.3` 实现！_<br/> _所有组件样式 `CSS` 均使用 `box-sizing: border-box;` 模式！_<br/> _目前共有 `46` 个常用基础 `UI` 组件，以及 `10` 个常用工具函数，并且持续探索更新中...！_<br/> _开箱即用！_

## Document & Online preview

[Bizarre UI](https://fystrive.github.io/bizarre-ui/)

## Install & Use

```bash
pnpm i bizarre-ui
# or
npm install bizarre-ui
# or
yarn add bizarre-ui
```

Import and register component

**Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VueAmazingUI from 'bizarre-ui'
import 'bizarre-ui/css'

const app = createApp(App)
app.use(BizarreUI)
```

**Local**

```vue
<script setup lang="ts">
import { Button } from 'bizarre-ui'
import 'bizarre-ui/css'
</script>
```

## Project

- Install dependencies

```sh
cd bizarre-ui

pnpm i
```

- Run project

```sh
pnpm dev
```

## Components

| Component name | Descriptions | Component name | Descriptions |
| :------------- | :----------- | :------------- | :----------- |
| Alert          | 警告提示     | Breadcrumb     | 面包屑       |
| Button         | 按钮         | Card           | 卡片         |
| Carousel       | 走马灯       | Cascader       | 级联选择     |
| Checkbox       | 多选框       | Collapse       | 折叠面板     |
| Countdown      | 倒计时       | DatePicker     | 日期选择     |
| Dialog         | 对话框       | Divider        | 分割线       |
| Empty          | 空状态       | Grid           | 栅格         |
| Image          | 图片         | Input          | 输入框       |
| InputNumber    | 数字输入框   | Message        | 全局提示     |
| Modal          | 信息提示     | Notification   | 通知提醒框   |
| Pagination     | 分页         | Progress       | 进度条       |
| QRCode         | 二维码       | Radio          | 单选框       |
| Rate           | 评分         | Result         | 结果         |
| Select         | 选择器       | Slider         | 滑动输入条   |
| Space          | 间距         | Spin           | 加载中       |
| Statistic      | 统计数值     | Steps          | 步骤条       |
| Swiper         | 触摸滑动插件 | Switch         | 开关         |
| Table          | 表格         | Tabs           | 标签页       |
| Tag            | 标签         | Textarea       | 文本域       |
| TextScroll     | 文字滚动     | Timeline       | 时间轴       |
| Tooltip        | 文字提示     | Upload         | 上传         |
| Video          | 播放器       | Waterfall      | 瀑布流       |

## Details

[My CSDN Blogs](https://blog.csdn.net/Dandrose)

## Functions

| Function name | Descriptions | Arguments |
| :-- | :-- | :-- |
| dateFormat | 简单易用的日期格式化函数！ | (timestamp: number&#124;string&#124;Date, format = 'YYYY-MM-DD HH:mm:ss') => string |
| requestAnimationFrame | 针对不同浏览器进行兼容处理！ | 使用方式不变 |
| cancelAnimationFrame | 针对不同浏览器进行兼容处理！ | 使用方式不变 |
| rafTimeout | 使用 requestAnimationFrame 实现的定时器函数，等效替代 (setTimeout 和 setInterval)！ | (func: Function, delay = 0, interval = false) => object |
| cancelRaf | 用于取消 rafTimeout 函数！ | (raf: { id: number }) => void |
| throttle | 使用 rafTimeout 实现的节流函数！ | (fn: Function, delay = 300) => any |
| debounce | 使用 rafTimeout 实现的防抖函数！ | (fn: Function, delay = 300) => any |
| add | 消除 js 加减精度问题的加法函数！ | (num1: number, num2: number) => number |
| downloadFile | 下载文件并自定义文件名！ | (url: string, name: string) => void |
| moneyFormat | 金额格式化函数！ | (value: number&#124;string, decimal = 2, split = ',') => string |
