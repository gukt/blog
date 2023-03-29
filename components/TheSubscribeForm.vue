<template>
  <form
              style="border: 1px solid #ccc; padding: 3px; text-align: center"
              action="https://tinyletter.com/gukt"
              method="post"
              target="popupwindow"
              onsubmit="window.open('https://tinyletter.com/gukt', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
            >
              <label for="tlemail"
                >每月一份邮件，分享我对如何构建被动收入的思考、推荐文章及资源，欢迎订阅
              </label>
              <input
                type="text"
                style="width: 140px"
                name="email"
                id="tlemail"
              />
              <input type="hidden" value="1" name="embed" /><input
                type="submit"
                value="Subscribe"
              />
            </form>
</template>