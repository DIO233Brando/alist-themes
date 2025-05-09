# Better Alist Custom

这是一个用于美化 Alist 的自定义资源库，提供多个可选主题（如 `custom`）。

## 使用方法

在 Alist 后台的【设置 → 自定义 → 自定义头部】中粘贴以下代码：

```html
<script>
fetch("https://cdn.jsdelivr.net/gh/DIO233Brando/better-alist-custom@main/themes/custom/header.html")
  .then(res => res.text())
  .then(data => {
    document.head.insertAdjacentHTML("beforeend", data);
  });
</script>

### 2. `themes/custom/header.html`

这是你提供的自定义头部代码文件。我将其保存为 `header.html`，并去掉了重复的 `<style>` 标签，将 CSS 放在单独的 `style.css` 文件中。

```html
<!-- Alist V3 建议脚本 -->
<script src="https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>

<!-- Valine 评论 -->
<script src="https://unpkg.com/valine/dist/Valine.min.js"></script>

<!-- 不蒜子计数 -->
<script async src="https://busuanzi.9420.ltd/js"></script>

<!-- Font6 图标字体 -->
<link rel="stylesheet" href="https://npm.elemecdn.com/font6pro@6.3.0/css/fontawesome.min.css" />
<link rel="stylesheet" href="https://npm.elemecdn.com/font6pro@6.3.0/css/all.min.css" />

<!-- 音乐播放器 -->
<link rel="stylesheet" href="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.css" />
<script src="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.js"></script>
<script src="https://npm.elemecdn.com/meting2@0.0.1/js/Meting.min.js"></script>

<!-- 顺序切换模型材质 -->
<script src="https://cdn.jsdelivr.net/gh/nova1751/live2d-api@latest/jsdelivr/sequential/autoload.min.js"></script>
<!-- 随机切换模型材质 -->
<script src="https://cdn.jsdelivr.net/gh/nova1751/live2d-api@latest/jsdelivr/random/autoload.min.js"></script>

<!-- 看板娘位置靠左 -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/nova1751/live2d-api@latest/css/left.min.css"
/>
<!-- 看板娘位置靠右 -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/nova1751/live2d-api@latest/css/right.min.css"
/>
