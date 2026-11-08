# dsh-plugin-cadpop

[![DSHIO/T 10](https://deepseekbase.com/badge/std.svg)](https://dshio.org/10/) [![deepseekbase](https://deepseekbase.com/badge/liangjiehappy-dsh-plugin-cadpop.svg)](https://deepseekbase.com/zh/plugins/liangjiehappy-dsh-plugin-cadpop/)
[![deepseekbase endpoint](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeepseekbase.com%2Fbadge%2Fliangjiehappy-dsh-plugin-cadpop.json&style=flat-square)](https://deepseekbase.com/zh/plugins/liangjiehappy-dsh-plugin-cadpop/)

Repository: https://github.com/moldkey/dsh-plugin-cadpop

CADPOP（cadpop.com）只读入口插件：参数化模板清单、帮助中心、DFM 入口、在线编辑器、图纸工具页。

English docs: [README.md](README.md).

## 标准与检验（DSHIO.ORG）

- **标准发布方：DSHIO.ORG** — DSHIO/T 10—2026（DSH 插件标准）。
- **检验结果：passed（通过，绿色）**：在 deepseekbase 按 DSHIO/T 21—2026 标准条件完成 install / list / mount / boot。
- **检验报告**：https://deepseekbase.com/zh/plugins/liangjiehappy-dsh-plugin-cadpop/
- **人工判断项**：DSHIO/T 10 的 5.5.1（描述质量）与 5.5.2（权限一致性）属人工判断，本插件由作者确认。
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
