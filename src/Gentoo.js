import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GentooIcon = ({
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
    <path d='M10.28,2C9.93,2 9.57,2.03 9.23,2.1C5.61,2.76 3.06,5.89 2.85,7.96C2.74,8.97 3.29,9.73 3.59,10.06C4.4,10.97 6.03,11.66 7.07,12.23C5.56,13.5 4.87,14.14 4.19,14.86C3.17,15.93 2.45,17.1 2.45,17.95C2.45,18.22 2.4,19.09 2.76,19.77C2.89,20.03 3.27,20.89 4.41,21.53C5.14,21.94 6.17,22.09 7.19,21.95C10.33,21.5 14.54,18.83 17.55,16.35C19.46,14.77 20.86,13.23 21.26,12.5C21.59,11.87 21.63,10.78 21.44,10.09C20.9,8.14 16.53,4.15 12.96,2.55C12.14,2.18 11.2,2 10.28,2M11.34,4.91C11.59,4.91 11.81,4.94 12,5C13.15,5.3 15.08,6.68 14.91,7.94C14.68,9.6 13.23,10.27 11.56,10.03C10.58,9.9 8.63,8.8 8.78,6.89C8.89,5.4 10.3,4.9 11.34,4.91M11.32,6.65C11.05,6.65 10.84,6.71 10.74,6.87C10.27,7.59 10.5,8.09 10.92,8.42C11.07,8.04 12.71,8.45 12.75,8.79C14.17,7.72 12.36,6.66 11.32,6.65Z' />
  </Svg>
)

GentooIcon.displayName = 'GentooIcon'

GentooIcon.defaultProps = {
  size: 24
}

export default GentooIcon