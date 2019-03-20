module.exports = {
    rules: {
        /**
         * @memberof possible-errors
         * @description 禁止出现空代码块，允许 catch 为空代码块
         */
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true
            }
        ]
    }
};
