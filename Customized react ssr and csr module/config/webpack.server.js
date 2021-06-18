const path = require('path');
const nodeExtension = require('webpack-node-externals');
module.exports ={
    entry:path.join(__dirname,"..","src","server","server.tsx"),
    output:{
        path:path.join(__dirname,"..","dist"),
        filename:'app.js'
    },
    target:'node',
    //webpack-node-externals
    externals:[
        nodeExtension(),
    ],
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use:'babel-loader',

            }
        ]
    },
    resolve:{
        extensions:['.js', '.tsx','.ts']
    }

}