'use strict';
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..', 'packages');
const dirs = fs.readdirSync(root).filter(name => fs.statSync(path.join(root, name)).isDirectory()).sort();
test('source preserves 27 skill packages and the four shared general skills', () => {
  assert.equal(dirs.length, 27);
  for (const id of ['source-synthesis', 'material-organizer', 'project-brief', 'deliverable-review']) assert.ok(dirs.includes(id));
  const ids = new Set();
  for (const dir of dirs) {
    const metadata = JSON.parse(fs.readFileSync(path.join(root, dir, 'talia-extension.json'), 'utf8'));
    const skill = fs.readFileSync(path.join(root, dir, 'SKILL.md'), 'utf8');
    assert.equal(metadata.kind, 'skill');
    assert.equal(metadata.publisher, 'talia-skills');
    assert.ok(metadata.id.startsWith('talia-skills/'));
    assert.equal(ids.has(metadata.id), false);
    ids.add(metadata.id);
    assert.match(skill, /^---\nname:/);
    for (const file of ['README.md', 'LICENSE', 'NOTICE']) assert.ok(fs.statSync(path.join(root, dir, file)).isFile());
  }
});


test('Impeccable package preserves pinned upstream content, licenses and resolvable adapter references', () => {
  const crypto = require('node:crypto');
  const packageRoot = path.join(root, 'impeccable-ui');
  const metadata = JSON.parse(fs.readFileSync(path.join(packageRoot, 'talia-extension.json'), 'utf8'));
  const provenance = JSON.parse(fs.readFileSync(path.join(packageRoot, 'provenance.json'), 'utf8'));
  assert.equal(metadata.license, 'Apache-2.0');
  assert.match(provenance.commit, /^[a-f0-9]{40}$/);
  assert.equal(provenance.upstreamFilesUnmodified, true);
  assert.ok(Object.keys(provenance.files).length > 50);
  for (const [file, expected] of Object.entries(provenance.files)) {
    assert.ok(!path.isAbsolute(file) && !file.split('/').includes('..'));
    const bytes = fs.readFileSync(path.join(packageRoot, 'upstream', file));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), expected, file);
  }
  assert.match(fs.readFileSync(path.join(packageRoot, 'LICENSE'), 'utf8'), /Apache License/);
  assert.match(fs.readFileSync(path.join(packageRoot, 'licenses/platform-design-skills-MIT.txt'), 'utf8'), /MIT License/);
  const skill = fs.readFileSync(path.join(packageRoot, 'SKILL.md'), 'utf8');
  for (const match of skill.matchAll(/\]\(([^)]+)\)/g)) {
    assert.ok(fs.statSync(path.join(packageRoot, match[1])).isFile(), match[1]);
  }
  for (const launcher of ['impeccable', 'impeccable.cmd', 'VERSION', 'engine-checksums.txt']) {
    assert.ok(fs.statSync(path.join(packageRoot, 'upstream/scripts', launcher)).isFile());
  }
});


test('guided-plan preserves requirements, explicit confirmation and host safety gates', () => {
  const skill = fs.readFileSync(path.join(root, 'guided-plan', 'SKILL.md'), 'utf8');
  assert.match(skill, /Raccogli le informazioni/);
  assert.match(skill, /Presenta il piano/);
  assert.match(skill, /solo dopo conferma esplicita/);
  assert.match(skill, /Le conferme di sicurezza dell.host restano obbligatorie/);
  assert.match(skill, /Se l.utente declina.*non attuare nulla/);
  assert.ok(skill.indexOf('Presenta il piano') < skill.indexOf('Se l\'utente conferma'));
});
