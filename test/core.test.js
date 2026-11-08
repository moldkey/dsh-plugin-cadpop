import test from 'node:test'
import assert from 'node:assert/strict'
import {
  DEFAULT_BASE, normalizeBase, slugify, buildHelpUrl,
  extractTitle, decodeEntities, parseTemplates,
} from '../lib/core.js'

test('normalizeBase', () => {
  assert.equal(normalizeBase(), DEFAULT_BASE)
  assert.equal(normalizeBase('https://cadpop.com/'), 'https://cadpop.com')
  assert.throws(() => normalizeBase('ftp://x'))
})

test('help slug 与 URL', () => {
  assert.equal(slugify('Getting Started'), 'getting-started')
  assert.equal(buildHelpUrl(DEFAULT_BASE, 'templates'), 'https://cadpop.com/help/templates/')
  assert.throws(() => buildHelpUrl(DEFAULT_BASE, ''))
})

test('extractTitle 去实体与空白', () => {
  assert.equal(extractTitle('<title> CADPOP &amp; 模板 </title>'), 'CADPOP & 模板')
  assert.equal(extractTitle(''), '')
  assert.equal(decodeEntities('a&amp;b&lt;c&gt;'), 'a&b<c>')
})

test('parseTemplates 只收带括号的模板行', () => {
  const html = `<ul>
    <li>Flange（法兰，Φ160 PCD120 6×Φ11）</li>
    <li>L Bracket（L 支架展开 200×100）</li>
    <li>简介</li>
    <li>Enclosure Flat（外壳展开 200×140 围边 40）</li>
  </ul>`
  const t = parseTemplates(html)
  assert.equal(t.length, 3)
  assert.ok(t[0].startsWith('Flange'))
  assert.ok(t.some((x) => x.includes('Enclosure')))
})
