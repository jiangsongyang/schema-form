![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffd41fb123d84ae8bc897bef45e1acd0~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5affc7406bae43bab43f15146a2b80c6~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7fb87e8323044868333ef1d6118ceeb~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd43f0dadd974cda8a76802661840740~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a572c2c44f84a13b8d168f1bade1950~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c80342445da47789157f551a8a6e9fa~tplv-k3u1fbpfcp-watermark.image?)

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

``` typescript
export type TSchema = {
  type: string
  config: {
    [k: string]: any
  }
  children?: TSchema[]
}
```
