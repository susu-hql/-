module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5,
                        propList: ['*'] //决定哪些属性自动转化
                    })
                ]
            }
        }
    }
}