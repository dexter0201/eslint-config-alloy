module.exports = {
    rules: {
        /**
         * @memberof possible-errors
         * @description 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
         * @off 几乎不会遇到这种场景
         */
        'no-control-regex': 'off'
    }
};
