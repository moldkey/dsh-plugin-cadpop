# dsh-plugin-cadpop

[![DSHIO/T 10](https://deepseekbase.com/badge/std.svg)](https://dshio.org/10/) [![deepseekbase](https://deepseekbase.com/badge/liangjiehappy-dsh-plugin-cadpop.svg)](https://deepseekbase.com/zh/plugins/liangjiehappy-dsh-plugin-cadpop/)
[![deepseekbase endpoint](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeepseekbase.com%2Fbadge%2Fliangjiehappy-dsh-plugin-cadpop.json&style=flat-square)](https://deepseekbase.com/zh/plugins/liangjiehappy-dsh-plugin-cadpop/)

Repository: https://github.com/moldkey/dsh-plugin-cadpop

Read-only CADPOP entry tools for DeepSeek Harness: parametric templates, help center, DFM entry, online editor, and drawing tools.

中文说明见 [README.zh-CN.md](README.zh-CN.md).

## Standards & testing (DSHIO.ORG)

- **Standard body: DSHIO.ORG** — DSHIO/T 10—2026 (DSH plugin standard).
- **Inspection: passed** (deepseekbase, brightgreen). install / list / mount / boot completed under DSHIO/T 21—2026 test conditions.
- **Test report**: https://deepseekbase.com/zh/plugins/liangjiehappy-dsh-plugin-cadpop/
- **Manual judgement**: DSHIO/T 10 clauses 5.5.1 (description quality) and 5.5.2 (permission consistency) are human-judged; the author confirms them for this plugin.
- **Not a certification**: DSHIO/T 32 certification is not enabled; this is an inspection result with a test report, not a certification.

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
