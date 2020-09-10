/*
 * @file: vue 的基础配置信息
 * @Date: 2020-09-10 15:08:48
 * @author: manyao.zhu
 */

const devTarget = '';
const testTarget = '';
const prodTarget = '';
const target = process.env.NODE_ENV === 'production' ? prodTarget : process.env.NODE_ENV === 'testing' ? testTarget: devTarget;

module.exports = {
    // publicPath: '/',
    // outputDir: 'dist',
    // assetsDir: 'static',
    // indexPath: 'index.html',
    // filenameHashing: true,
    // lintOnSave: process.env.NODE_ENV !== 'production',
    // productionSourceMap: false,
    // devServer: {
    //     host: 'localhost',
    //     port: '8989',
    //     https: false,
    //     proxy: [
    //         {
    //             context: ['/api'],
    //             target,
    //             changeOrigin: true,
    //             pathRewrite: {}
    //         }
    //     ]
    // }
}