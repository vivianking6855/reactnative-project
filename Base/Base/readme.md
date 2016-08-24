# ReactNative Demo Project #

## download attention
run "npm install" to install “node_modules”

## key store
 keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
密码：kingsun
别名： my-key-alias
别名密码：kingsun
文件：my-release-key.keystore


## Run on a Device
adb reverse tcp:8081 tcp:8081


> [http://reactnative.cn/post/759](http://reactnative.cn/post/759)
