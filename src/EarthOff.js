import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EarthOffIcon = ({
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
    <path d='M22,5.27L20.5,6.75C21.46,8.28 22,10.07 22,12C22,17.52 17.52,22 12,22C10.08,22 8.28,21.46 6.75,20.5L5.27,22L4,20.72L20.72,4L22,5.27M17.9,17.39C19.2,15.97 20,14.08 20,12C20,10.63 19.66,9.34 19.05,8.22L14.83,12.44C14.94,12.6 15,12.79 15,13V16H16C16.89,16 17.64,16.59 17.9,17.39M11,19.93V18C10.5,18 10.07,17.83 9.73,17.54L8.22,19.05C9.07,19.5 10,19.8 11,19.93M15,4.59V5C15,6.1 14.1,7 13,7H11V9C11,9.55 10.55,10 10,10H8V12H10.18L8.09,14.09L4.21,10.21C4.08,10.78 4,11.38 4,12C4,13.74 4.56,15.36 5.5,16.67L4.08,18.1C2.77,16.41 2,14.3 2,12C2,6.48 6.48,2 12,2C14.3,2 16.41,2.77 18.1,4.08L16.67,5.5C16.16,5.14 15.6,4.83 15,4.59Z' />
  </Svg>
)

EarthOffIcon.displayName = 'EarthOffIcon'

EarthOffIcon.defaultProps = {
  size: 24
}

export default EarthOffIcon