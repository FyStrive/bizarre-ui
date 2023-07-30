# 快速上手

## 安装

**With PNPM**

```bash
$ pnpm i bizarre-ui
# or
$ pnpm add bizarre-ui
```

**With YARN**

```bash
$ yarn add bizarre-ui
```

**With NPM**

```bash
$ npm i bizarre-ui
```

## 使用

> **Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import BizarreUI from 'bizarre-ui'
import 'bizarre-ui/css'

const app = createApp(App)
app.use(BizarreUI)

app.mount('#app')
```

> **Local**

```vue
<script setup lang="ts">
import { Button } from 'bizarre-ui'
import 'bizarre-ui/css'
</script>

<template>
  <Button></Button>
</template>
```
