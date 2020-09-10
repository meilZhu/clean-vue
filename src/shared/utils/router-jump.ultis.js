/*
 * @file: 路由导航守卫
 * @Date: 2020-09-10 17:51:56
 * @author: manyao.zhu
 */
import router from '../../router';

router.beforeEach((to, from, next) => {
    // 处理设置页面标题
    if (to.meta.title) {
        document.title = to.meta.title
    }

    next();
})

router.afterEach((to, from) => {

})