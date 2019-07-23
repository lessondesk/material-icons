import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BusAlertIcon = ({
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
    <path d='M16,1C19.87,1 23,4.13 23,8C23,11.53 20.39,14.45 17,14.93V18C17,18.84 16.65,19.58 15.96,20.2V22C15.96,22.27 15.87,22.5 15.68,22.71C15.5,22.91 15.26,23 15,23H14C13.71,23 13.47,22.91 13.27,22.71C13.06,22.5 12.96,22.27 12.96,22V21H5.04V22C5.04,22.27 4.94,22.5 4.73,22.71C4.53,22.91 4.29,23 4,23H3C2.74,23 2.5,22.91 2.32,22.71C2.13,22.5 2.04,22.27 2.04,22V20.2C1.35,19.58 1,18.84 1,18V8C1,6.42 1.7,5.35 3.07,4.8C4.44,4.26 6.42,4 9,4L10.23,4.03C11.5,2.2 13.61,1 16,1M16,3C13.24,3 11,5.24 11,8C11,10.76 13.24,13 16,13C18.76,13 21,10.76 21,8C21,5.24 18.76,3 16,3M15,10H17V12H15V10M15,4H17V9H15V4M3,13H11.09C9.8,11.72 9,9.96 9,8H3V13M4.5,16C3.69,16 3,16.67 3,17.5C3,18.33 3.67,19 4.5,19C5.35,19 6,18.33 6,17.5C6,16.67 5.33,16 4.5,16M13.5,16C12.65,16 12,16.67 12,17.5C12,18.33 12.67,19 13.5,19C14.31,19 15,18.33 15,17.5C15,16.67 14.33,16 13.5,16Z' />
  </Svg>
)

BusAlertIcon.displayName = 'BusAlertIcon'

BusAlertIcon.defaultProps = {
  size: 24
}

export default BusAlertIcon