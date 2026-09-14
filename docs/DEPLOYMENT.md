# 部署说明

## 本地 Mock 模式

此模式不需要云开发环境，也不会发起网络请求。

1. 在微信开发者工具中导入仓库根目录。
2. 使用测试号，或把 `project.config.json` 中的占位 AppID 换成自己的 AppID。
3. 点击“编译”。
4. 通过底部导航查看首页、预测和战绩页面。

## 使用自己的 CloudBase 环境

1. 复制 `env.example.js` 为 `env.js`。
2. 将 `CLOUD_ENV_ID` 改为自己的测试环境 ID。
3. 将 `STORAGE_BASE_URL` 改为自己的存储域名；本案例默认不依赖该地址。
4. 在微信开发者工具中打开“云开发”，选择同一个环境。
5. 右键 `cloudfunctions/getDemoData`，选择“上传并部署：云端安装依赖”。

云函数使用 `cloud.DYNAMIC_CURRENT_ENV`，代码中不保存固定环境 ID。部署后可以在开发者工具控制台测试：

```js
wx.cloud.callFunction({
  name: "getDemoData",
  data: { action: "listMatches" }
}).then(console.log);
```

## 发布前检查

- 确认 `project.config.json` 不包含生产 AppID。
- 确认没有提交 `env.js`、`.env` 或 `project.private.config.json`。
- 搜索 `secret`、`token`、`apiKey`、`password` 等敏感字段。
- 使用自己的测试环境验证后再发布。

