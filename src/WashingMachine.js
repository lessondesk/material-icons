import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WashingMachineIcon = ({
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
    <path d='M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18C19.1,2 20,2.9 20,4V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2M7,4C6.45,4 6,4.45 6,5C6,5.55 6.45,6 7,6C7.55,6 8,5.55 8,5C8,4.45 7.55,4 7,4M10,4C9.45,4 9,4.45 9,5C9,5.55 9.45,6 10,6C10.55,6 11,5.55 11,5C11,4.45 10.55,4 10,4M12,8C8.69,8 6,10.69 6,14C6,17.31 8.69,20 12,20C15.31,20 18,17.31 18,14C18,10.69 15.31,8 12,8Z' />
  </Svg>
)

WashingMachineIcon.displayName = 'WashingMachineIcon'

WashingMachineIcon.defaultProps = {
  size: 24
}

export default WashingMachineIcon