# dsh-plugin-cadpop

[![DSHIO/T 10](https://deepseekbase.com/badge/std.svg)](https://dshio.org/10/) [![deepseekbase](https://deepseekbase.com/badge/liangjiehappy-dsh-plugin-cadpop.svg)](https://deepseekbase.com/zh/plugins/liangjiehappy-dsh-plugin-cadpop/)
[![deepseekbase endpoint](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeepseekbase.com%2Fbadge%2Fliangjiehappy-dsh-plugin-cadpop.json&style=flat-square)](https://deepseekbase.com/zh/plugins/liangjiehappy-dsh-plugin-cadpop/)

Repository: https://github.com/moldkey/dsh-plugin-cadpop

Read-only CADPOP entry tools for DeepSeek Harness: parametric templates, help center, DFM entry, online editor, and drawing tools.

中文说明见 [README.zh-CN.md](README.zh-CN.md).

## Standards & testing (DSHIO.ORG)

**Conformance declaration (DSHIO/T 10—2026 §8.1)**

```
符合 DSHIO/T 10—2026（基準 DSH 0.2.2-rc.1，靜態層 + 動態層）
檢驗日期：2026-11-08
環境指紋：dsh=0.2.2-rc.1;img=dsh-sandbox:5.0@sha256:d90b02baef228bb105d4817d1a7d23bdd6aec24f463cc7bc3d1fbb2e5af45c00;node=24.11.1;pnpm=9.15.9;mem=768m;cpu=1
重複次數：2 次（一致）
（總體判定為「有條件符合」：待人工判断 2 项（5.5.1、5.5.2））
```

- **Scope**: static layer (T0) + dynamic layer (T1–T4). T5 (tool invocation) is not part of the current implementation and is not claimed.
- **Manual judgement**: DSHIO/T 10 clauses 5.5.1 (description quality) and 5.5.2 (permission consistency) are developer-judged; the author confirms them for this plugin.
- **Not a certification**: this is an inspection report, not a certification. DSHIO/T 32 certification is not enabled.

## Tools

| Tool | Purpose |
|---|---|
| `cadpop_templates` | List parametric templates |
| `cadpop_help` | Open a help topic |
| `cadpop_dfm` | DFM manufacturability/quotation entry |
| `cadpop_app` | Online CAD editor entry |
| `cadpop_tools` | Drawing tools collection page |

## Install

```bash
dsh plugin --profile web add @liangjiehappy/dsh-plugin-cadpop
```

## Config

```yaml
- insert:
    - id: dsh-plugin-cadpop
      name: "@liangjiehappy/dsh-plugin-cadpop"
      config:
        baseUrl: "https://cadpop.com"
```

Zero-config works; the default base URL is `https://cadpop.com`.

## Permissions

- Outbound HTTPS GET to `cadpop.com` only (configurable `baseUrl`)
- No file reads or writes, no credential access, no shell
- Read-only: no drawing upload, no payment

## Limitations

- No automatic pricing: DFM prices come from the page, never promised by the AI
- Template list is parsed from `/help/templates/`; page redesigns may affect parsing
- Drawing generation belongs to the site/other plugins, not this one
