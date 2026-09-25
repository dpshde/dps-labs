import assert from "node:assert/strict";
import { test } from "node:test";
import { education, experience, identity, projects, releases, scores, scoreHref } from "./site.ts";

test("contact and profile facts stay on the page", () => {
  assert.equal(identity.email, "dylanpriceshade@icloud.com");
  assert.equal(identity.place, "Louisville, KY");
  assert.match(identity.links.spotify, /5p3OCHNDQToL17lUks6TSj/);
  assert.equal(identity.links.youtube, "https://www.youtube.com/@dpshde");
  assert.match(identity.links.canon, /canonchords\.com/);
});

test("experience keeps the rooms Dylan has worked in, including Papa Johns", () => {
  const names = experience.map((job) => job.name);
  assert.deepEqual(names, [
    "Papa Johns",
    "Forward Research",
    "JPMorgan Chase",
    "Stantec",
    "CSI",
    "OpenText",
  ]);
  assert.match(experience[0]?.description ?? "", /Applied AI Engineer/);
});

test("selected work keeps the shipped names and only Glossary from open source", () => {
  assert.deepEqual(projects.map((item) => item.name), [
    "Canon",
    "Arbit Studio",
    "Voyager",
    "Vivace Theory",
    "Chord Solver",
    "Scripture",
    "Glossary",
  ]);
  const dropped = ["jj-opencode", "LLM Fuel", "raycast-opencode", "Prompt Suite", "auto-title"];
  assert.equal(
    projects.some((item) => dropped.includes(item.name)),
    false,
  );
  assert.equal(projects.find((item) => item.name === "Glossary")?.href, "https://github.com/dpshade/permaweb-glossary");
  assert.ok(projects.every((item) => item.href?.startsWith("https://")));
});

test("music keeps Pacific, Nightfall, Glimpse, and Serenity, eight scores, and education", () => {
  assert.deepEqual(
    releases.map((release) => release.title),
    ["Pacific", "Nightfall", "Glimpse", "Serenity"],
  );
  assert.ok(
    releases.every((release) => release.art?.endsWith(".webp")),
    "album thumbs are the compressed webp files",
  );
  assert.equal(
    releases.some((release) => release.title === "Lift the Window" || release.title === "Not My Fault"),
    false,
  );
  assert.equal(scores.length, 8);
  assert.match(scoreHref(scores[0]!.slug), /sheetmusicplus\.com/);
  assert.ok(education.some((item) => item.name === "University of Kentucky"));
  assert.ok(education.some((item) => item.name === "AWS Cloud Practitioner"));
});
