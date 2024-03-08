import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: [
  {
    file: 'dist/bundle.js',
    format: 'cjs' 
  }, 
  {
    file: 'dist/bundle.min.js',
    format: 'iife',
    name: 'version',
    plugins: [terser()]
  }
],
  plugins: [
    resolve(),
    commonjs()
  ]
};
