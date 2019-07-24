import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ThermometerMinusIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M13,17C13,19.76 10.76,22 8,22C5.24,22 3,19.76 3,17C3,15.43 3.74,13.94 5,13V5C5,3.34 6.34,2 8,2C9.66,2 11,3.34 11,5V13C12.26,13.94 13,15.43 13,17M7,8V14.17C5.44,14.72 4.62,16.44 5.17,18C5.72,19.56 7.44,20.38 9,19.83C10.56,19.27 11.38,17.56 10.83,16C10.53,15.14 9.85,14.47 9,14.17V8H7M22,11H14V13H22V11Z' />
  </Svg>
)

ThermometerMinusIcon.displayName = 'ThermometerMinusIcon'

ThermometerMinusIcon.defaultProps = {
  size: 24
}

export default ThermometerMinusIcon