const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

var os = require('os');
var platform = os.platform();
var UglifyJsParallelPlugin = require('webpack-uglify-parallel');

var debug = process.env.NODE_ENV;
var ENV = debug;

var entries = getEntry('./static/js/*js',"static/js");
entries.vendor = ['rem'];

var chunks = Object.keys(entries);

var config = {
  watch:true,
  entry:entries,
  output: {
    publicPath:'./',
    path: path.join(__dirname, '/app/'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename:'js/chunks/[name]-[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'axios':'axios/dist/axios.min',
      'vue':'vue/dist/vue.min',
      'vue-router':'vue-router/dist/vue-router.min',
      'rem':'./static/libs/rem.js',
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
        loader:ExtractTextPlugin.extract({
            fallbackLoader:'style-loader',
            loader: ['css-loader','postcss-loader','less-loader'],
          publicPath:"../"
        }),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader:ExtractTextPlugin.extract({
            fallbackLoader:'style-loader',
            loader: ['css-loader','postcss-loader','less-loader']
        }),
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
      new ExtractTextPlugin({
        filename:'css/[name].[chunkhash:8].css',
        allChunks: true
      }),
     new CleanPlugin(["app/js","app/css"],{
          root: __dirname,
          verbose: true,
          dry: false,
          "exclude": ["reset.css","weUI.css","swiper.min.css","polyfill.min.js","swiper.min.js"]
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          }
      }),
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
      })
  ],
  performance: {
    hints: false
  },
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
