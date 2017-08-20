
module.exports = {
    entry: __dirname+ '/main.ts' ,//入口
    output: {
        path: __dirname+ '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ],
        exprContextCritical: false
    },
    devServer:{
        contentBase:'./dist',
        inline:true,
        hot:true
    }

};