今天在带薪群聊的时候,群里的老哥发了个这张图片

![1663213483345.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b28af116c6d34b5386a495b32fc3af60~tplv-k3u1fbpfcp-watermark.image?)

我就在想,

本文会按照 `最小步骤实现` + `及时重构` 的思想完成基本的配置化渲染功能, 整体思路比较简单, 可放心食用!


技术栈 `React` `Antd` `Ts`

# 今日目标

转换json
```json
{
  "type": "Form",
  "config": {},
  "children": [
    {
      "type": "Input",
      "config": {
        "label": "name",
        "name": "name",
        "placeholder": "please input your name",
        "allowClear": true,
        "span": 8
      }
    }
  ]
}
```
变成

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75e8eae04f914c8e85229b597d53f14c~tplv-k3u1fbpfcp-watermark.image?)

可以正常的渲染配置的节点
可以正常的收集到输入控件的值

我把代码放在了 [(传送门)](https://github.com/jiangsongyang/schema-form) 里 , 如果文章哪里卡住了可以直接去看~

让我们开始动手, 一起撸一个配置化表单吧!

初始化项目


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffd41fb123d84ae8bc897bef45e1acd0~tplv-k3u1fbpfcp-watermark.image?)


设计使用方式

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5affc7406bae43bab43f15146a2b80c6~tplv-k3u1fbpfcp-watermark.image?)



数据结构定义
``` typescript
export type TSchema = {
  type: string
  config: {
    [k: string]: any
  }
  children?: TSchema[]
}
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7fb87e8323044868333ef1d6118ceeb~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd43f0dadd974cda8a76802661840740~tplv-k3u1fbpfcp-watermark.image?)

开始实现


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c80342445da47789157f551a8a6e9fa~tplv-k3u1fbpfcp-watermark.image?)


useCreateFormNode
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49b37de17d82479482cf88596ac7400d~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b13ada61b6f6457a87d34aca61192507~tplv-k3u1fbpfcp-watermark.image?)




input 基本显示结束
=============================================

123

属性配置

input 自身属性

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e08d06ad95e487d830f2cc0a84e4364~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79e3520fcd4a4243968d3dc532b8e73a~tplv-k3u1fbpfcp-watermark.image?)

小型重构
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c796fd71cc1436cb275fc2505451072~tplv-k3u1fbpfcp-watermark.image?)



![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e314c5cdbc24c4fb759e37834a90851~tplv-k3u1fbpfcp-watermark.image?)


额外属性处理
无法收集值
Form.Item

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac6243d139f94ff4890021023dc3f48f~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67f90aea2821473abe922fde1ded587c~tplv-k3u1fbpfcp-watermark.image?)

布局相关属性

直接包?

HOC

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/460f2709f09442b2ac07b04ab9a473b5~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7cc154820cbd4294b81a8bd4cffb8cd1~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3346837de1bb4444976ac6945afa33b5~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4ab13dac5184643ae1fba194bce6898~tplv-k3u1fbpfcp-watermark.image?)

重构成功

添加布局HOC

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ac3c1cd9eb643d592947a2b3f59b65c~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf99bc0c1aa24c3b8d5248842610fe18~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac4faa5edcad4a15a6eac5589fcd6dba~tplv-k3u1fbpfcp-watermark.image?)

样式有点怪 因为form样式

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4511ac41ddb14598bf0ee2d633187754~tplv-k3u1fbpfcp-watermark.image?)

检查元素


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ea08fd589ad46eeb11f8b73e3bd9339~tplv-k3u1fbpfcp-watermark.image?)


是预期的dom结构

是否可以成功收集数据

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66982949b05945cca4ed14f613aa227c~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ae12797d68b46c4b9e6704995d93bbe~tplv-k3u1fbpfcp-watermark.image?)

因为接管了antd input 所以无法自动绑定 value onChange

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c261f757f395420db55fa0181c4b1dd6~tplv-k3u1fbpfcp-watermark.image?)
