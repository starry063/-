# 账号同步配置

推荐方式：Supabase 邮箱魔法链接。

这个方案不需要短信费用、不需要微信开放平台审核，也不用维护密码系统。用户输入邮箱，收到登录链接，点击后回到网页，同一账号即可在手机和电脑同步学习数据。

## 需要做的事

1. 创建 Supabase 项目。
2. 在 Supabase SQL Editor 执行 `supabase-schema.sql`。
3. 打开 Project Settings / API，复制 Project URL 和 anon public key。
4. 修改 `sync-config.js`：

```js
window.WANXIANG_SYNC_CONFIG = {
  provider: "supabase",
  supabaseUrl: "https://你的项目.supabase.co",
  supabaseAnonKey: "你的 anon public key",
  tableName: "wanxiang_user_state"
};
```

5. 在 Authentication / URL Configuration 设置：
   - Site URL：你的正式部署网址
   - Redirect URLs：同一个正式部署网址，也可以额外加入本地测试地址

## 部署建议

最简单的部署路线是 Vercel 或 Netlify：直接部署 `wanwu-leixiang-web` 目录。部署后在手机浏览器打开网址，选择“添加到主屏幕”，即可像 App 一样使用。

## 其他登录方式

- 手机号登录：需要短信服务和费用，配置比邮箱复杂。
- 微信登录：需要微信开放平台/公众号/移动应用资质和审核，最不适合当前阶段。
- 纯本地保存：不能自然在手机和电脑之间同步，只适合作为离线缓存。
