<template>
  <form
    action="https://tinyletter.com/gukt"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/gukt', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    class="flex justify-center gap-4"
  >
    <!-- 每月一份邮件，分享我对如何构建被动收入的思考、推荐文章及资源， -->
    <input
      id="email"
      type="text"
      name="email"
      placeholder="输入你的邮箱地址"
      class="w-[300px] rounded border border-gray-500 bg-transparent px-2"
    />
    <input type="hidden" value="1" name="embed" />
    <input type="submit" value="订阅" class="rounded border px-2 py-1" />
  </form>
</template>
