import assert from "node:assert/strict";
import { test } from "node:test";
import { isCurrentNav, normalizePath } from "./nav.ts";

test("normalizePath drops a trailing slash and keeps root", () => {
  assert.equal(normalizePath("/"), "/");
  assert.equal(normalizePath("/work/"), "/work");
  assert.equal(normalizePath("music"), "/music");
  assert.equal(normalizePath("/music/?q=1"), "/music");
});

test("home is current only on the about page", () => {
  assert.equal(isCurrentNav("/", "/"), true);
  assert.equal(isCurrentNav("/work/", "/"), false);
  assert.equal(isCurrentNav("/music", "/"), false);
});

test("section nav matches with or without a trailing slash", () => {
  assert.equal(isCurrentNav("/work/", "/work/"), true);
  assert.equal(isCurrentNav("/work", "/work/"), true);
  assert.equal(isCurrentNav("/music/", "/music/"), true);
});

test("a nested path stays inside its section, and prefixes do not collide", () => {
  assert.equal(isCurrentNav("/music/pacific/", "/music/"), true);
  assert.equal(isCurrentNav("/workshop/", "/work/"), false);
  assert.equal(isCurrentNav("/workbench", "/work/"), false);
});
