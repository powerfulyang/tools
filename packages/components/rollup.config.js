import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';
const pkgDeps = Array.from(Object.keys(pkg.dependencies));

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
      plugins: [autoprefixer],
      extract: './index.css',
      minimize: true,
    }),
    url(),
    svgr(),
    resolve(),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    process.env.NODE_ENV !== 'development' && terser(),
  ],
  external: pkgDeps,
};
