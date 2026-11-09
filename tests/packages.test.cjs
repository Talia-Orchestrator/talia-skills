'use strict';
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..', 'packages');
const dirs = fs.readdirSync(root).filter(name => fs.statSync(path.join(root, name)).isDirectory()).sort();
test('source preserves 25 skill packages and the four shared general skills', () => {
  assert.equal(dirs.length, 25);
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
