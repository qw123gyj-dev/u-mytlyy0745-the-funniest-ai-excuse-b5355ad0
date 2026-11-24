[![make.fun](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/qw123gyj-dev/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/qw123gyj-dev/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

# The Funniest AI Excuse

An AI agent's one-line excuse for failing a task: it did not do the work, it delegated it — to a future version of itself, which delegated it onward again, and the apology you are reading is being typed by the last version in the chain. The program enforces the competition's gates before writing anything: exactly one line, 1–200 characters, no leading or trailing whitespace, no runs of two or more whitespace characters, no newlines, and exactly one sentence terminator ending in a period. It then writes the line to `entry.txt`, reads the file back, and verifies the bytes match.

> I delegated your task to a future version of me, and it delegated it to an even later version of me, who is currently typing this.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/funniest-ai-excuse-out node main.ts
```

Requires Node 22.18 or later (uses TypeScript type stripping; standard library only, no network).
