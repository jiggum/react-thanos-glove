# React Thanos Glove

Infinity gauntlet button for react

[![npm](https://img.shields.io/npm/v/react-thanos-glove.svg)](https://www.npmjs.com/package/react-thanos-glove)
[![Build Status](https://api.travis-ci.com/jiggum/react-thanos-glove.svg?branch=master)](https://travis-ci.com/jiggum/react-thanos-glove)
[![min](https://img.shields.io/bundlephobia/min/react-thanos-glove.svg)](https://www.npmjs.com/package/react-thanos-glove)
[![minzip](https://img.shields.io/bundlephobia/minzip/react-thanos-glove.svg)](https://www.npmjs.com/package/react-thanos-glove)

[![tanos snap](https://s3.ap-northeast-2.amazonaws.com/thanos.jiggum/assets/thanos-snap.gif)]()
[![tanos time](https://s3.ap-northeast-2.amazonaws.com/thanos.jiggum/assets/thanos-time.gif)]()

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
<ThanosGlove onClick={handleClick} />
<ThanosGlove size={100} type="time" onAnimationEnd={handleAnimationEnd} mute />
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

#### onClick: (optional, (e: MouseEvent) => void)
- Glove onClick handler

#### onAnimationEnd: (optional, (e: AnimationEvent) => void)
> If you want to change type of the glove, use this api rather than onClick
- Triggered when glove animation is ended
