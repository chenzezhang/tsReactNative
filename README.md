## Typescript Reach-native

> ### 遇到的坑。

<ol>
    <li>配置typescript。</li>
    <li>react-native 版本问题</li>
    <li>typescript 本身语法问题</li>
</ol>

>  ### 增加App Icon 图片

<ol>
    <li>打开Ccode，根目录，项目根文件夹下， Images.xcassets </li>
    <li>点击AppIcon，配置： 120 * 120 180 * 180</li>
</ol>

> ### 真机打包测试
### 运行 
```
npm run iosbundle
```
<ol>
    <li>
        使用xcode 打开项目。
    </li>
    <li>
        项目根目录，导入打包好的bundle文件夹。
    </li>
    <li>
        连接手机，处于同一无线网络下。
    </li>
    <li>
        build
    </li>
</ol>
