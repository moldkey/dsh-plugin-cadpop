# dsh-plugin-cadpop

Repository: https://github.com/moldkey/dsh-plugin-cadpop

CADPOP（cadpop.com）只读入口插件：参数化模板清单、帮助中心、DFM 入口、在线编辑器、图纸工具页。

English docs: [README.md](README.md).

## 工具

| 工具 | 作用 |
|---|---|
| `cadpop_templates` | 列出参数化模板 |
| `cadpop_help` | 打开帮助主题 |
| `cadpop_dfm` | DFM 制造分析/报价入口 |
| `cadpop_app` | 在线 CAD 编辑器入口 |
| `cadpop_tools` | 图纸工具集合页 |

## 安装

```bash
dsh plugin --profile web add @liangjiehappy/dsh-plugin-cadpop
```

## 配置

```yaml
- insert:
    - id: dsh-plugin-cadpop
      name: "@liangjiehappy/dsh-plugin-cadpop"
      config:
        baseUrl: "https://cadpop.com"
```

## 权限声明

- 只对 `cadpop.com` 发 HTTPS GET
- 不读写文件、不读凭证、不执行 shell
- 只读：不上传图纸、不发起支付

## 限制

- 不自动报价：DFM 价格以页面结果为准
- 模板清单从 `/help/templates/` 解析，页面改版可能影响解析
- 生成图纸等能力属于 cadpop 站内/其它插件，不在本插件范围
