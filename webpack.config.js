'use strict'
const path = require('path')
console.log('path')
module.exports ={
    entry:{
        file1:'./src/index.js',
        file2:'./src/index.js'
    },
    output: {
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    mode:'production',
    module:{
        rules:[{
            test: /.js$/,
            use: 'babel-loader'
        },{
            test: /.css$/,
            use: ['style-loader','css-loader']
        // },{
        //     test: /.scss$/,
        //     use: ['style-loader','css-loader','sass-loader']
         },{
            test:/.(png|jpg|gif|jpeg|svg)$/,
            use:'file-loader'
         }]
    }
}