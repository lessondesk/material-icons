import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GaugeFullIcon = ({
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
    <path d='M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4C16.42,4 20,7.58 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12C4,7.58 7.58,4 12,4M10,6C9.45,6 9,6.45 9,7C9,7.55 9.45,8 10,8C10.55,8 11,7.55 11,7C11,6.45 10.55,6 10,6M14,6C13.45,6 13,6.45 13,7C13,7.55 13.45,8 14,8C14.55,8 15,7.55 15,7C15,6.45 14.55,6 14,6M17.09,8.94C16.96,8.94 16.84,8.97 16.7,9L13.5,10.32L13.23,10.43C12.67,10 11.91,9.88 11.25,10.15C10.23,10.56 9.73,11.73 10.15,12.75C10.56,13.77 11.73,14.27 12.75,13.85C13.41,13.59 13.88,13 14,12.28L14.23,12.18L17.45,10.88L17.47,10.87C18,10.66 18.23,10.08 18.03,9.56C17.87,9.18 17.5,8.93 17.09,8.94M7,9C6.45,9 6,9.45 6,10C6,10.55 6.45,11 7,11C7.55,11 8,10.55 8,10C8,9.45 7.55,9 7,9Z' />
  </Svg>
)

GaugeFullIcon.displayName = 'GaugeFullIcon'

GaugeFullIcon.defaultProps = {
  size: 24
}

export default GaugeFullIcon