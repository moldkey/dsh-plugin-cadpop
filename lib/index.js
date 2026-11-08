// dsh-plugin-cadpop · cadpop.com 只读入口与帮助中心工具
import { defineTool } from '@deepseek-ai/dsh-tools'
import {
  DEFAULT_BASE, normalizeBase, buildHelpUrl, extractTitle, parseTemplates,
} from './core.js'

export const name = 'dsh-plugin-cadpop'
export const inject = ['tools']

const text = (value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }]
const headers = { 'user-agent': 'dsh-plugin-cadpop/0.1', accept: 'text/html' }

export function apply(ctx, config = {}) {
  const base = normalizeBase(config.baseUrl)

  async function fetchPage(path, signal) {
    const url = base + path
    const r = await fetch(url, { headers, signal, redirect: 'follow' })
    const html = await r.text()
    return { status: r.status, ok: r.ok, url: r.url || url, title: extractTitle(html), html }
  }

  ctx.tools.register(defineTool({
    name: 'cadpop_templates',
    description: '列出 CADPOP 参数化模板（法兰/支架/外壳/齿轮等），返回模板名与帮助页链接。当用户问有哪些参数化模板时使用。',
    parameters: {},
    output: { schema: { type: 'json' }, render: (_a, v) => text(v) },
    isConcurrencySafe: () => true,
    async execute(_args, exec) {
      const page = await fetchPage('/help/templates/', exec.signal)
      const templates = parseTemplates(page.html)
      return { status: page.status, ok: page.ok, url: page.url, count: templates.length, templates }
    },
  }))

  ctx.tools.register(defineTool({
    name: 'cadpop_help',
    description: '打开 CADPOP 帮助中心指定主题（如 templates、getting-started、save-export），返回标题与链接。当用户要打开帮助主题时使用。',
    parameters: {
      topic: { type: 'string', required: true, description: '帮助主题 slug，如 templates' },
    },
    output: { schema: { type: 'json' }, render: (_a, v) => text(v) },
    isConcurrencySafe: () => true,
    async execute(args, exec) {
      const url = buildHelpUrl(base, args.topic)
      const r = await fetch(url, { headers, signal: exec.signal, redirect: 'follow' })
      const html = await r.text()
      return { status: r.status, ok: r.ok, url: r.url || url, title: extractTitle(html) }
    },
  }))

  ctx.tools.register(defineTool({
    name: 'cadpop_dfm',
    description: '返回 CADPOP DFM 制造分析/报价入口（人工确认价格，不自动报价）。当用户要做可制造性检查或报价入口时使用。',
    parameters: {},
    output: { schema: { type: 'json' }, render: (_a, v) => text(v) },
    isConcurrencySafe: () => true,
    async execute() {
      return { url: base + '/dfm/', note: '上传 DXF/STEP 获取可制造性检查与报价；价格以页面结果为准，不由 AI 承诺。' }
    },
  }))

  ctx.tools.register(defineTool({
    name: 'cadpop_app',
    description: '返回 CADPOP 在线 CAD 编辑器入口（浏览器打开，可导入图纸手工修改）。当用户要打开在线编辑器时使用。',
    parameters: {},
    output: { schema: { type: 'json' }, render: (_a, v) => text(v) },
    isConcurrencySafe: () => true,
    async execute() {
      return { url: base + '/app/', note: '在编辑器里可打开 DXF/DWG、改图、导出；与对话式生成共用同一套模板概念。' }
    },
  }))

  ctx.tools.register(defineTool({
    name: 'cadpop_tools',
    description: '返回 CADPOP 工具集合页（DWG→DXF、DXF→PDF、BOM 导出等）标题与链接。当用户要图纸工具集合页时使用。',
    parameters: {},
    output: { schema: { type: 'json' }, render: (_a, v) => text(v) },
    isConcurrencySafe: () => true,
    async execute(_args, exec) {
      const page = await fetchPage('/tools/', exec.signal)
      return { status: page.status, ok: page.ok, url: page.url, title: page.title }
    },
  }))
}
