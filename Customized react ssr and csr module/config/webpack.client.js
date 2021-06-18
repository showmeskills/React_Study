const path = require('path');

module.exports ={
    entry:path.join(__dirname,"..","src","client","index.tsx"),
    output:{
        path:path.join(__dirname,"..","dist"),
        filename:'assets/bundle.js'
    },
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