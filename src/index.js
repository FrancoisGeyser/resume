import './main.css'
import React from 'react'
import ReactDom from 'react-dom'
import { App } from './App'
import { Font } from '@react-pdf/renderer'

import RobotoRegular from '../public/Roboto-Regular.ttf'
import RobotoBold from '../public/Roboto-Bold.ttf'

Font.register({
  family: 'Roboto',
  fonts: [
    { src: RobotoRegular, fontWeight: '400' },
    { src: RobotoBold, fontWeight: '700' },
  ],
})

ReactDom.render(<App />, document.querySelector('#root'))
