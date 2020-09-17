# Generals 统一UI组件

各种小的控件集合，各种提醒文字可配置

## 适用范围

适合需要小控件的场景,下图为各组件效果截图：

![组件效果截图-空状态]
![组件效果截图-loading状态]
![组件效果截图-倒计时]
![组件效果截图-文本自动省略]

设计规范链接：https://modao.cc/app/c6ff5baaae7d447bef2505ede7e2629daa7ebc1f?simulator_type=device&sticky#screen=ske0tcqn65g46ic

线上访问地址：http://172.16.81.169:8999/cj-generals/

## 代码演示

``` html
import { NoAddGroup,NoAct,NoFindReport,StocksOfEmpty,NetWorkError,Empty,Loading,CountDown,Ellipsis } from 'abc-generals';

<Empty />
<NetWordError />
<StocksOfEmpty />
<NoFindReport />
<NoAct />
<NoAddGroup />
<Loading />
<CountDown style={{ fontSize: 20 }} target={targetTime} />
<Ellipsis length={100}>{article}</Ellipsis>

```

## API

空状态

|参数|说明|类型|默认值|
|:--|:--|:--:|:--:|
|title|提示文字，可配置|`string/element`||
|theme|主题|`string`|`浅色主题`|
|img|图片|`element`|浅色默认图片|

ps:img属性可自定义大小间距等样式，如不需要自定义样式 可直接引用如下示例
``` html
const Img = styled.img`
    margin: 0 auto;
    display:block;
    width: 129px;
    height:99px;
`
<Empty img={<Img src={require("../EmptyComponent/Empty/empty-dark.png")} alt="empty" />}/>

```


loading状态

|参数|说明|类型|默认值|
|:--|:--|:--:|:--:|
|title|提示文字，可配置|`string/element`||
|color|颜色|`string`|`灰色`|
|type|类型|`number`|`波浪形`|


CountDown倒计时

|参数|说明|类型|默认值|
|:--|:--|:--:|:--:|
|format|时间格式化显示|`Function(time)`||
|target|目标时间|`Date`|`-`|
|onEnd|倒计时结束回调|`function`|`-`|

文本自动省略Ellipsis

|参数|说明|类型|默认值|
|:--|:--|:--:|:--:|
|tooltip|移动到文本展示完整内容的提示|`boolean`|`-`|
|length|在按照长度截取下的文本最大字符数，超过则截取省略|`number`|`-`|
|lines|在按照行数截取下最大的行数，超过则截取省略|`number`|`1`|
|fullWidthRecognition|是否将全角字符的长度视为2来计算字符串长度|`boolean`|`-`|


