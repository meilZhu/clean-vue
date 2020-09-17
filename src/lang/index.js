/*
 * @file: 国际化
 * @Date: 2020-09-17 10:42:32
 * @author: manyao.zhu
 */
import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

/**
 * 以下是手动加载语言
 */
// import zh from "../assets/lang/zh.json";
// import en from "../assets/lang/en.json";
// const i18n = new VueI18n({
//   locale: "zh", // 定义默认语言为中文
//   messages: {
//     zh,
//     en,
//   },
// });
// // 热加载
// if (module.hot) {
//   module.hot.accept(
//     ["../assets/lang/zh.json", "../assets/lang/en.json"],
//     function() {
//       i18n.setLocaleMessage("zh", require("../assets/lang/zh.json").default);
//       i18n.setLocaleMessage("en", require("../assets/lang/en.json").default);
//     }
//   );
// }

/**
 * 这里是自动添加语言并热加载
 */
function loadMessages() {
  const context = require.context(
    "../assets/lang/",
    true,
    /[a-z0-9-_]+\.json$/i
  );

  const messages = context
    .keys()
    .map((key) => ({ key, locale: key.match(/[a-z0-9-_]+/i)[0] }))
    .reduce(
      (messages, { key, locale }) => ({
        ...messages,
        [locale]: context(key),
      }),
      {}
    );

  return { context, messages };
}

const { context, messages } = loadMessages();

const i18n = new VueI18n({
  locale: "zh",
  messages,
});

// 热替换
if (module.hot) {
  module.hot.accept(context.id, () => {
    const { messages: newMessages } = loadMessages();

    Object.keys(newMessages)
      .filter((locale) => messages[locale] !== newMessages[locale])
      .forEach((locale) => {
        messages[locale] = newMessages[locale];
        i18n.setLocaleMessage(locale, messages[locale]);
      });
  });
}

export default i18n;
