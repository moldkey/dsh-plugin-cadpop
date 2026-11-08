# dsh-plugin-cadpop

Read-only CADPOP entry tools for DeepSeek Harness: parametric templates, help center, DFM entry, online editor, and drawing tools.

中文说明见 [README.zh-CN.md](README.zh-CN.md).

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
