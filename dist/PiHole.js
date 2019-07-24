import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PiHoleIcon = ({
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
    <path d='M5.62,2C9.5,2 11.57,4.29 11.77,7.93C12.5,3.57 15.93,4.08 15.93,4.08C16.1,6.55 14.07,8.05 11.77,8.17C11.12,6.81 7.25,3.47 7.25,3.47C7.23,3.5 10.97,6.74 10.83,8.15C8.33,7.88 5.82,6 5.62,2M6.06,13.11L9.92,9.25C11.09,8.08 13,8.08 14.16,9.25L18,13.11C19.19,14.28 19.19,16.18 18,17.35L14.16,21.21C13,22.38 11.09,22.38 9.92,21.21L6.06,17.35C4.89,16.18 4.89,14.28 6.06,13.11M9.39,19.59C9.39,18.36 10.15,16.85 12.09,16.85C13.4,16.85 14.87,18.1 16.31,17.96C14.87,17.92 13.59,16.85 13.59,15.19C13.59,13.86 14.69,12.9 14.69,11.34C14.63,12.33 13.82,13.77 12,13.77C10.59,13.77 9.55,12.63 7.87,12.63C8.58,12.67 10.5,13.3 10.5,15.35C10.5,17 9.39,17.5 9.39,19.59Z' />
  </Svg>
)

PiHoleIcon.displayName = 'PiHoleIcon'

PiHoleIcon.defaultProps = {
  size: 24
}

export default PiHoleIcon