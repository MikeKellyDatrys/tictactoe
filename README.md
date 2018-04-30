# tictactoe

## Requirements
Nodejs 4.2.1+, npm 2+. You can follow [these instructions](https://github.com/creationix/nvm) to install nodejs of arbitrary version.

## Local development
```
npm i
npm run serve
```
You can configure the host and port for development server using ```APP_PORT``` and ```APP_HOST``` environment variables. You can set it in the package.json.

By default the api calls are proxied to the ```http://APP_HOST:SERVER_PORT```. ```SERVER_PORT``` is 8000 by default.

Usually it is useful to mock some server response for development purposes. You can add any mocks to the ```src/mocks.js``` and use it inside your [ducks](https://github.com/erikras/ducks-modular-redux).


## Build for production
```
npm i
npm run build
```


## Useful info
[Redux documentation with a lot of examples](https://rackt.github.io/redux/index.html)

[Useful redux libraries](https://github.com/xgrommx/awesome-redux)
