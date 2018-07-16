'use strict';

import postcss  from 'rollup-plugin-postcss'
import resolve  from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble    from 'rollup-plugin-buble'
import html     from 'rollup-plugin-fill-html';

import nested   from 'postcss-nested';

const entry = 'src/index.js';

export default {
    input: entry,
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        postcss({
            autoModules: true,
            plugins: [
                nested()
            ],
        }),
        buble({
            jsx: 'h',
            objectAssign: 'Object.assign'
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        html({
            template: 'src/index.html',
            filename: 'index.html'
        })
    ]
}