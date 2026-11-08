# dsh-plugin-cadpop

[![DSHIO.ORG](https://img.shields.io/badge/DSHIO.ORG-inspection%20passed-blue)](https://dshio.org/standards/10/)
[![DSH test report](https://img.shields.io/badge/DSH-test%20report-brightgreen)](https://deepseekbase.com/ecosystem/plugin-tests/)

Repository: https://github.com/moldkey/dsh-plugin-cadpop

CADPOP（cadpop.com）只读入口插件：参数化模板清单、帮助中心、DFM 入口、在线编辑器、图纸工具页。

English docs: [README.md](README.md).

## 标准与检验（DSHIO.ORG）

- **标准发布方：DSHIO.ORG** — DSHIO/T 10—2026（DSH 插件标准）。
- **检验通过**：已通过 DSHIO/T 10 检验，检验报告发布在 deepseekbase.com（install / list / mount / boot，DSH 0.2.2-rc.1）。
- **检验范围**：`dsh.bundle.patch`、patch 结构、`engines.dsh` 只写下限、工具契约、权限声明（仅 `network`）、无红线权限组合。
- **不是认证**：DSHIO/T 32 认证尚未启用；这是带检验报告的检验结果，不是认证。

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
