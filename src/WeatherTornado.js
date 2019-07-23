import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WeatherTornadoIcon = ({
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
    <path d='M21,5H3C2.45,5 2,4.55 2,4C2,3.45 2.45,3 3,3H21C21.55,3 22,3.45 22,4C22,4.55 21.55,5 21,5M20,8C20,7.45 19.55,7 19,7H5C4.45,7 4,7.45 4,8C4,8.55 4.45,9 5,9H19C19.55,9 20,8.55 20,8M21,12C21,11.45 20.55,11 20,11H10C9.45,11 9,11.45 9,12C9,12.55 9.45,13 10,13H20C20.55,13 21,12.55 21,12M16,16C16,15.45 15.55,15 15,15H9C8.45,15 8,15.45 8,16C8,16.55 8.45,17 9,17H15C15.55,17 16,16.55 16,16M13,20C13,19.45 12.55,19 12,19H10C9.45,19 9,19.45 9,20C9,20.55 9.45,21 10,21H12C12.55,21 13,20.55 13,20Z' />
  </Svg>
)

WeatherTornadoIcon.displayName = 'WeatherTornadoIcon'

WeatherTornadoIcon.defaultProps = {
  size: 24
}

export default WeatherTornadoIcon