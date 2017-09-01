web: webpack-dev-server --debug --hot --devtool eval-source-map --output-pathinfo --watch --colors --inline --content-base public --port 8050 --host 0.0.0.0

web: cross-env NODE_ENV=dev BABEL_ENV='node' pm2 start index.js --name quick-server