# dsh-plugin-cadpop

[![DSHIO/T 10](https://deepseekbase.com/badge/std.svg)](https://dshio.org/10/) [![deepseekbase](https://deepseekbase.com/badge/liangjiehappy-dsh-plugin-cadpop.svg)](https://deepseekbase.com/zh/plugins/liangjiehappy-dsh-plugin-cadpop/)
[![deepseekbase endpoint](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeepseekbase.com%2Fbadge%2Fliangjiehappy-dsh-plugin-cadpop.json&style=flat-square)](https://deepseekbase.com/zh/plugins/liangjiehappy-dsh-plugin-cadpop/)

Repository: https://github.com/moldkey/dsh-plugin-cadpop

CADPOP（cadpop.com）只读入口插件：参数化模板清单、帮助中心、DFM 入口、在线编辑器、图纸工具页。

English docs: [README.md](README.md).

## 标准与检验（DSHIO.ORG）

**符合性声明（DSHIO/T 10—2026 §8.1）**

```
符合 DSHIO/T 10—2026（基準 DSH 0.2.2-rc.1，靜態層 + 動態層）
檢驗日期：2026-11-08
環境指紋：dsh=0.2.2-rc.1;img=dsh-sandbox:5.0@sha256:d90b02baef228bb105d4817d1a7d23bdd6aec24f463cc7bc3d1fbb2e5af45c00;node=24.11.1;pnpm=9.15.9;mem=768m;cpu=1
重複次數：2 次（一致）
（總體判定為「有條件符合」：待人工判断 2 项（5.5.1、5.5.2））
```

- **覆盖范围**：静态层（T0）+ 动态层（T1–T4）。T5（工具调用）当前未实施，本插件不作此声明。
- **人工判断项**：DSHIO/T 10 的 5.5.1（描述质量）与 5.5.2（权限一致性）由开发者自行判定，本插件由作者确认。
- **不是认证**：这是检验报告，不是认证；DSHIO/T 32 认证尚未启用。

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
