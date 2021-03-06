import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CloudOutlineIcon = ({
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
    <path d='M19,18H6C3.79,18 2,16.21 2,14C2,11.79 3.79,10 6,10H6.71C7.37,7.69 9.5,6 12,6C15.04,6 17.5,8.46 17.5,11.5V12H19C20.66,12 22,13.34 22,15C22,16.66 20.66,18 19,18M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14C0,17.31 2.69,20 6,20H19C21.76,20 24,17.76 24,15C24,12.36 21.95,10.22 19.35,10.03Z' />
  </Svg>
)

CloudOutlineIcon.displayName = 'CloudOutlineIcon'

CloudOutlineIcon.defaultProps = {
  size: 24
}

export default CloudOutlineIcon