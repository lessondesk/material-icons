import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WeatherLightningIcon = ({
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
    <path d='M6,16C3.24,16 1,13.76 1,11C1,8.24 3.24,6 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8C21.21,8 23,9.79 23,12C23,14.21 21.21,16 19,16H18C17.45,16 17,15.55 17,15C17,14.45 17.45,14 18,14H19C20.1,14 21,13.1 21,12C21,10.9 20.1,10 19,10H17V9C17,6.24 14.76,4 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8C4.34,8 3,9.34 3,11C3,12.66 4.34,14 6,14H7C7.55,14 8,14.45 8,15C8,15.55 7.55,16 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z' />
  </Svg>
)

WeatherLightningIcon.displayName = 'WeatherLightningIcon'

WeatherLightningIcon.defaultProps = {
  size: 24
}

export default WeatherLightningIcon