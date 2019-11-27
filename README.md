# react-thanos-glove

Thanos glove button for react.

[![npm](https://img.shields.io/npm/v/react-thanos-glove.svg)](https://www.npmjs.com/package/react-thanos-glove)
[![Build Status](https://api.travis-ci.org/jiggum/react-thanos-glove.svg?branch=master)](https://travis-ci.org/jiggum/react-thanos-glove)
[![min](https://img.shields.io/bundlephobia/min/react-thanos-glove.svg)](https://www.npmjs.com/package/react-thanos-glove)
[![minzip](https://img.shields.io/bundlephobia/minzip/react-thanos-glove.svg)](https://www.npmjs.com/package/react-thanos-glove)

[![tanos snap](http://thanos.jiggum.s3.amazonaws.com/assets/thanos-snap.gif)]()
[![tanos time](http://thanos.jiggum.s3.amazonaws.com/assets/thanos-time.gif)]()

## Installation

yarn:
```bash
yarn add react-thanos-glove
```

npm:
```bash
npm install --save react-thanos-glove
```

## Usage

```js
import ThanosGlove from 'react-thanos-glove'

...
<ThanosGlove />
<ThanosGlove size={100} type="time" mute />
...
```

## Props

#### size: (optional, number, default:80)
- Button's height and width. (px)

#### duration: (optional, number, default: 2000)
- Anmation's duration. (ms)

#### type: (optional, 'snap' | 'time', default: 'snap')
- Button's type

#### mute: (optional, boolean, default: false)
- Whether mute the action sound
