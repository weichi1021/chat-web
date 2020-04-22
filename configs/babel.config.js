const babel_config = {
  test:/\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              "useBuiltIns": "usage" 
            }
          ],
          '@babel/preset-react',
        ],
        plugins: [
          ['@babel/plugin-proposal-object-rest-spread'],
          ["@babel/plugin-proposal-class-properties", { "loose": true }]
        ]
      }
    }
  ]
}

module.exports = babel_config;
