import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'

const umdGlobals = {
  react: 'React',
  'prop-types': 'PropTypes',
}

export default {
  input: 'src/ThanosGlove.jsx',
  external: Object.keys(umdGlobals),
  output: {
    file: 'dist/index.js',
    name: 'reactThanosGlove',
    format: 'umd',
    globals: umdGlobals,
  },
  plugins: [
    postcss({
      modules: true,
      extensions: ['scss'],
    }),
    babel({ exclude: '**/node_modules/**' }),
    uglify(),
  ],
}
