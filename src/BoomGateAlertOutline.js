import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BoomGateAlertOutlineIcon = ({
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
    <path d='M19.86,3C19.31,2.04 18.09,1.71 17.12,2.27L6.92,8.16C6.62,8.06 6.31,8 6,8C4.34,8 3,9.34 3,11V20C2.45,20 2,20.45 2,21V22H10V21C10,20.45 9.55,20 9,20V11.58L19.12,5.73C20.08,5.18 20.41,3.96 19.86,3M7.5,20H4.5V13.6C5.43,14.14 6.57,14.14 7.5,13.6V20M6,12.5C5.17,12.5 4.5,11.83 4.5,11C4.5,10.17 5.17,9.5 6,9.5C6.83,9.5 7.5,10.17 7.5,11C7.5,11.83 6.83,12.5 6,12.5M10.4,9.62L8.1,8.62L9.4,7.87L11.7,8.87L10.4,9.62M13.86,7.62L11.56,6.62L12.86,5.87L15.16,6.87L13.86,7.62M17.33,5.62L15.03,4.62L16.33,3.87L18.62,4.87L17.33,5.62M20,16H18V11H20V16M20,20H18V18H20V20Z' />
  </Svg>
)

BoomGateAlertOutlineIcon.displayName = 'BoomGateAlertOutlineIcon'

BoomGateAlertOutlineIcon.defaultProps = {
  size: 24
}

export default BoomGateAlertOutlineIcon