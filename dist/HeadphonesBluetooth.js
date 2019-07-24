import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HeadphonesBluetoothIcon = ({
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
    <path d='M8,6C4.69,6 2,8.69 2,12V16.8C2,17.46 2.54,18 3.2,18H6V14H4V12C4,9.79 5.79,8 8,8C10.21,8 12,9.79 12,12V14H10V18H12.8C13.46,18 14,17.46 14,16.8V12C14,8.69 11.31,6 8,6M19,7V10.79L16.71,8.5L16,9.21L18.79,12L16,14.79L16.71,15.5L19,13.21V17H19.5L22.35,14.14L20.21,12L22.35,9.85L19.5,7H19M20,8.91L20.94,9.85L20,10.79V8.91M20,13.21L20.94,14.14L20,15.08V13.21Z' />
  </Svg>
)

HeadphonesBluetoothIcon.displayName = 'HeadphonesBluetoothIcon'

HeadphonesBluetoothIcon.defaultProps = {
  size: 24
}

export default HeadphonesBluetoothIcon