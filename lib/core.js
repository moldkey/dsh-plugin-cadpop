// dsh-plugin-cadpop · 纯函数：帮助路径、HTML 标题与模板清单解析
export const DEFAULT_BASE = 'https://cadpop.com'

export function normalizeBase(base) {
  const b = (base || DEFAULT_BASE).trim().replace(/\/+$/, '')
  if (!/^https?:\/\//i.test(b)) throw new Error('baseUrl 必须以 http(s):// 开头')
  return b
}

export function slugify(s) {
  return String(s || '')
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9\u4e00-\u9fa5-]+/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function buildHelpUrl(base, topic) {
  const slug = slugify(topic)
  if (!slug) throw new Error('topic 不能为空')
  return normalizeBase(base) + '/help/' + slug + '/'
}

export function extractTitle(html) {
  const m = String(html || '').match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  if (!m) return ''
  return decodeEntities(m[1]).replace(/\s+/g, ' ').trim().slice(0, 200)
}

export function decodeEntities(s) {
  return String(s)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

/** 从 help/templates 页面提取模板清单（<li> 文本） */
export function parseTemplates(html) {
  const out = []
  const re = /<li[^>]*>([\s\S]*?)<\/li>/gi
  let m
  while ((m = re.exec(String(html || ''))) !== null) {
    const t = decodeEntities(m[1].replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim()
    if (!t || t.length > 120) continue
    if (!/[（(]/.test(t)) continue
    out.push(t)
    if (out.length >= 30) break
  }
  return [...new Set(out)]
}
