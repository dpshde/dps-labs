import assert from "node:assert/strict";
import { test } from "node:test";
import { education, experience, identity, openSource, projects, releases, scores, scoreHref } from "./site.ts";

test("contact and profile facts stay on the page", () => {
  assert.equal(identity.email, "dylanpriceshade@icloud.com");
  assert.equal(identity.place, "Louisville, KY");
  assert.match(identity.links.spotify, /4XOMyjPhYS9tT0SccdzZAt/);
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

test("selected work and open source keep the shipped names", () => {
  assert.deepEqual(projects.map((item) => item.name), [
    "Canon",
    "Arbit Studio",
    "Voyager",
    "Vivace Theory",
    "Chord Solver",
    "Scripture",
  ]);
  assert.equal(openSource.length, 6);
  assert.ok(projects.every((item) => item.href?.startsWith("https://")));
});

test("music keeps four early releases, later singles, eight scores, and education", () => {
  assert.deepEqual(
    releases.slice(0, 4).map((release) => release.title),
    ["Pacific", "Nightfall", "Glimpse", "Serenity"],
  );
  assert.ok(releases.some((release) => release.title === "Lift the Window"));
  assert.ok(releases.some((release) => release.title === "Not My Fault"));
  assert.equal(scores.length, 8);
  assert.match(scoreHref(scores[0]!.slug), /sheetmusicplus\.com/);
  assert.ok(education.some((item) => item.name === "University of Kentucky"));
  assert.ok(education.some((item) => item.name === "AWS Cloud Practitioner"));
});
