# dsh-plugin-cadpop

[![DSHIO.ORG](https://img.shields.io/badge/DSHIO.ORG-inspection%20passed-blue)](https://dshio.org/standards/10/)
[![DSH test report](https://img.shields.io/badge/DSH-test%20report-brightgreen)](https://deepseekbase.com/ecosystem/plugin-tests/)

Repository: https://github.com/moldkey/dsh-plugin-cadpop

Read-only CADPOP entry tools for DeepSeek Harness: parametric templates, help center, DFM entry, online editor, and drawing tools.

中文说明见 [README.zh-CN.md](README.zh-CN.md).

## Standards & testing (DSHIO.ORG)

- **Standard body: DSHIO.ORG** — DSHIO/T 10—2026 (DSH plugin standard).
- **Inspection passed**: DSHIO/T 10 inspection passed; the test report is published on deepseekbase.com (install / list / mount / boot, DSH 0.2.2-rc.1).
- **Inspection scope**: manifest `dsh.bundle.patch`, patch structure, `engines.dsh` lower bound, tool contract, declared permissions (`network` only), no red-line permission combinations.
- **Not a certification**: DSHIO/T 32 certification is not enabled; this is an inspection result with a test report, not a certification.

- **DSHIO/T 10—2026** (DSH plugin standard): conformance checked — manifest `dsh.bundle.patch`, patch structure, `engines.dsh` lower bound, tool contract, declared permissions (`network` only), no red-line permission combinations.
- **DSH sandbox**: install / list / mount / boot tested on deepseekbase.com (DSH 0.2.2-rc.1).
- This is a conformance statement, not a certification: DSHIO/T 32 certification is not enabled yet.

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
