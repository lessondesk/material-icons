import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MouseBluetoothIcon = ({
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
    <path d='M20,7H20.5L23.35,9.85L21.21,12L23.35,14.14L20.5,17H20V13.21L17.71,15.5L17,14.79L19.79,12L17,9.21L17.71,8.5L20,10.79V7M21,8.91V10.79L21.94,9.85L21,8.91M21,13.21V15.08L21.94,14.14L21,13.21M15,9V10H9V2.07C12.39,2.56 15,5.47 15,9M1,10V9C1,5.47 3.61,2.56 7,2.07V10H1M15,15C15,18.87 11.87,22 8,22C4.13,22 1,18.87 1,15V12H15V15Z' />
  </Svg>
)

MouseBluetoothIcon.displayName = 'MouseBluetoothIcon'

MouseBluetoothIcon.defaultProps = {
  size: 24
}

export default MouseBluetoothIcon