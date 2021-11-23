# yarn2-puppeteer-pdf

Using puppeteer to generate PDFs doesn't work with yarn berry (v2 & v3).

## How To

1. `git clone` this project
1. `cd` into this project
1. `yarn && yarn build` to install deps and build files
1. `yarn start`

Running `yarn start` should log the following error message:
```log
TypeError: p.match is not a function
  at Object.toPortablePath (D:\[...]\yarn2-puppeteer-pdf\.pnp.cjs:6092:35)
  at PosixFS.mapToBase (D:\[...]\yarn2-puppeteer-pdf\.pnp.cjs:12033:24)
  at PosixFS.fsMapToBase (D:\[...]\yarn2-puppeteer-pdf\.pnp.cjs:8097:25)
  at PosixFS.writeFilePromise (D:\[...]\yarn2-puppeteer-pdf\.pnp.cjs:7937:18)
  at URLFS.writeFilePromise (D:\[...]\yarn2-puppeteer-pdf\.pnp.cjs:7936:30)
  at Object.getReadableAsBuffer (D:\[...]\yarn2-puppeteer-pdf\build\index.js:2258:29)
  at processTicksAndRejections (internal/process/task_queues.js:97:5)
  at async Page.pdf (D:\[...]\yarn2-puppeteer-pdf\build\index.js:7424:16)
  at async printPdf (D:\[...]\yarn2-puppeteer-pdf\build\index.js:25371:3)
  at async main (D:\[...]\yarn2-puppeteer-pdf\build\index.js:25381:5)
```

The parameter `p` passed to `Object.toPortablePath` has the following value:
```
FileHandle { fd: 3 }
```
See: https://developer.mozilla.org/en-US/docs/Web/API/File_Handle_API

## Versions

```
Binaries:
  Node: 12.22.7
  Yarn: 3.1.0
  npm: 6.14.15
```