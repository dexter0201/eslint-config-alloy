module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description 禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
         * @off 太严格了，可以由使用者自己去判断如何混用操作符
         */
        'no-mixed-operators': 'off'
    }
};
