module.exports = {
    rules: {
        /**
         * @memberof best-practices
         * @description @fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
         */
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: true,
                exceptions: {
                    Property: true,
                    BinaryExpression: false,
                    VariableDeclarator: true,
                    ImportDeclaration: true
                }
            }
        ]
    }
};
