目标
```json
{
  "type": "Form",
  "config": {},
  "children": [
    {
      "type": "Input",
      "config": {
        "name": "A",
        "placeholder": "this is A input placeholder",
        "allowClear": true
      }
    }
  ]
}
```
变成

todo




初始化项目


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffd41fb123d84ae8bc897bef45e1acd0~tplv-k3u1fbpfcp-watermark.image?)


这东西应该怎么用呢

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