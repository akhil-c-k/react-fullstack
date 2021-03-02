 //indicate application should bundle

 const path = require("path");

 module.exports = {
     mode:"development",
     //route path
     entry:path.resolve(__dirname,`src`,`app`),
     output:{
         path:path.resolve(__dirname,'dist'),
          //output file
         filename:"bundle.js",
         publicPath:"/"
         //where the code sit,route
     },
     resolve:{
         extensions : ['.js', '.jsx']
         //array of extension 
     },
     devServer:{
         historyApiFallback:true
     },
     module:{
         rules:[{
             test:/\.jsx?/,
             loader:'babel-loader' 
         }]
     } 
 } 