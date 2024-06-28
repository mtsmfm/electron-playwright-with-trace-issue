# Electron Playwright with trace option issue

```
$ cd pw-144
$ npm install
$ npx playwright test test.spec.ts --trace on

Running 1 test using 1 worker

  ✓  1 test.spec.ts:15:1 › should work (651ms)

  1 passed (1.4s)
```

```
$ cd pw-145
$ npm install
$ npx playwright test test.spec.ts --trace on

Running 1 test using 1 worker

  ✘  1 test.spec.ts:15:1 › should work (415ms)


  1) test.spec.ts:15:1 › should work ───────────────────────────────────────────────────────────────

    Error: ENOENT: no such file or directory, open '/home/mtsmfm/ghq/github.com/mtsmfm/electron-playwright-example/pw-145/test-results/.playwright-artifacts-0/7e647ec48523e8dd0434626c5a1420a7.zip'

  1 failed
    test.spec.ts:15:1 › should work ────────────────────────────────────────────────────────────────
```
