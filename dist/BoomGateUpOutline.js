import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BoomGateUpOutlineIcon = ({
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
    <path d='M19.86,3C20.41,3.96 20.08,5.18 19.12,5.73L9,11.58V20C9.55,20 10,20.45 10,21V22H2V21C2,20.45 2.45,20 3,20V11C3,9.34 4.34,8 6,8C6.31,8 6.62,8.06 6.92,8.16L17.12,2.27C18.09,1.71 19.31,2.04 19.86,3M7.5,20V13.6C6.57,14.14 5.43,14.14 4.5,13.6V20H7.5M6,12.5C6.83,12.5 7.5,11.83 7.5,11C7.5,10.17 6.83,9.5 6,9.5C5.17,9.5 4.5,10.17 4.5,11C4.5,11.83 5.17,12.5 6,12.5M10.4,9.62L11.7,8.87L9.4,7.87L8.1,8.62L10.4,9.62M13.86,7.62L15.16,6.87L12.86,5.87L11.56,6.62L13.86,7.62M17.33,5.62L18.62,4.87L16.33,3.87L15.03,4.62L17.33,5.62M16,20V15H13L17,11.16L21,15H18V20H16Z' />
  </Svg>
)

BoomGateUpOutlineIcon.displayName = 'BoomGateUpOutlineIcon'

BoomGateUpOutlineIcon.defaultProps = {
  size: 24
}

export default BoomGateUpOutlineIcon