const build = require("esbuild").build;
const pnpPlugin = require("@yarnpkg/esbuild-plugin-pnp").pnpPlugin;

build({
  plugins: [pnpPlugin()],
  color: true,
  entryPoints: ["./src/index.js"],
  outfile: "./build/index.js",
  bundle: true,
  sourcemap: true,
  platform: "node",
  target: "node12",
  logLevel: "error",
}).catch((e) => {
  console.error(e);
  process.exit(1);
});
