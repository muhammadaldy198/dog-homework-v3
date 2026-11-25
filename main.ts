// v3: groomer-Tuesday — the dog eats the day to cancel the bath.
import { writeFileSync, chmodSync } from "node:fs";

const entry = "I found 'groomer, Tuesday' on your homework, so I ate Tuesday. If Tuesday's gone, the bath's gone too. I'm still dry. Zero regrets.";
const target = "/output/entry.txt";
writeFileSync(target, entry, "utf8");
chmodSync(target, 0o644);
