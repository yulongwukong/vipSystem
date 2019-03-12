var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var NotifierPlugin = require('node-notifier');
var WebpackBar = require('webpackbar');
var ICON = path.join(__dirname, 'icon.png');
var server = require('./server.js');
var debug = process.env.NODE_ENV;
var ENV = debug;
var os = require("os");
var platform = os.platform();

var entries = getEntry('./static/js/*js',"static/js");
entries.vendor = ['rem'];

var chunks = Object.keys(entries);

var config = {
  watch:true,
  entry:entries,
  output: {
    publicPath:'./',
    path: path.join(__dirname, '/app/'),
    filename: 'js/[name].js',
    chunkFilename: 'js/chunks/[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue','.json'],
    alias: {
      'axios':'axios/dist/axios.min',
      'vue':'vue/dist/vue.min',
      'md5':'md5/md5',
      'rem':'./static/libs/rem.js',
      'vue-router':'vue-router/dist/vue-router.min',
      '@':path.join(__dirname,'static')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'js':'babel-loader?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
            'less': 'vue-style-loader!css-loader!postcss-loader!less-loader'
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader:"style-loader!css-loader!postcss-loader!less-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader:"style-loader!css-loader!postcss-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader:'url-loader?limit=1000&name=image/[name].[ext]?v=[hash:8]',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
        loader:'url-loader?name=fonts/[name].[ext]',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
      new WebpackBar(),
      new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: function (module) {
             return module.context && module.context.indexOf('node_modules') !== -1;
          }
      }),
      new webpack.optimize.CommonsChunkPlugin({ 
          name: 'manifest'
      }),
      new webpack.DefinePlugin({
          'process.ENV': JSON.stringify(ENV)
      }),
      new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: ['你的APP运行在 http://'+server.host+":"+server.port],
            notes: ['一些附加注释将显示UNPON编译成功']
          },
          onErrors: function (severity, errors) {

          },
          clearConsole: true,
          additionalFormatters: [],
          additionalTransformers: []
      }),
      // new NotifierPlugin({
      //     onErrors: (severity, errors) => {
      //         if (severity !== 'error') {
      //             return;
      //         }
      //         const error = errors[0];
      //         notifier.notify({
      //             title: "Webpack error",
      //             message: severity + ': ' + error.name,
      //             subtitle: error.file || '',
      //             icon: ICON
      //         });
      //     }
      // })
  ],
  performance: {
    hints: false
  },
  //开启服务
  devServer:server
}

module.exports = config;

var pages = 
      platform=="darwin"?
      Object.keys(getEntry('static/view/*.html', 'static/view')):
      Object.keys(getEntry('./static/view/*.html', 'static/view'));

pages.forEach(function(pathname) {
    var conf = {
        filename: pathname + '.html', //生成的html存放路径，相对于path
        template: 'html-withimg-loader!'+'static/view/' + pathname + '.html', //html模板路径
        inject: 'body',    //js插入的位置，true/'head'/'body'/false
        //cache:true,
        excludeChunks: ['dev-helper']
    };
    if (pathname in config.entry) {
      conf.chunks = ["manifest","vendor",pathname];
    }

    config.plugins.push(new HtmlWebpackPlugin(conf));
    
});

function getEntry(globPath, pathDir) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;

    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        if(platform=="darwin"){
          pathname = path.join(dirname, basename);
          pathname = (pathDir?pathname.replace(new RegExp('^' + pathDir), ''): pathname).slice(1); //修改了取值；
        }
        else{
          pathname = path.join(dirname, basename).replace(/\\/g, "/");
          pathname = (pathDir?pathname.replace(new RegExp(pathDir), ''): pathname);
        }

        entries[pathname] = './' + entry;

    }
    return entries;
}
