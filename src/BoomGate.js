import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BoomGateIcon = ({
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
    <path d='M20,9H8.22C7.11,7.77 5.21,7.68 4,8.8C3.36,9.36 3,10.16 3,11V20C2.45,20 2,20.45 2,21V22H10V21C10,20.45 9.55,20 9,20V13H20C21.1,13 22,12.1 22,11C22,9.9 21.1,9 20,9M6,12.5C5.17,12.5 4.5,11.83 4.5,11C4.5,10.17 5.17,9.5 6,9.5C6.83,9.5 7.5,10.17 7.5,11C7.5,11.83 6.83,12.5 6,12.5M10.5,12L9,10H10.5L12,12H10.5M14.5,12L13,10H14.5L16,12H14.5M18.5,12L17,10H18.5L20,12H18.5Z' />
  </Svg>
)

BoomGateIcon.displayName = 'BoomGateIcon'

BoomGateIcon.defaultProps = {
  size: 24
}

export default BoomGateIcon