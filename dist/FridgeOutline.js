import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FridgeOutlineIcon = ({
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
    <path d='M9,21V22H7V21C5.9,21 5,20.1 5,19V4C5,2.9 5.9,2 7,2H17C18.1,2 19,2.9 19,4V19C19,20.1 18.1,21 17,21V22H15V21H9M7,4V9H17V4H7M7,19H17V11H7V19M8,12H10V15H8V12M8,6H10V8H8V6Z' />
  </Svg>
)

FridgeOutlineIcon.displayName = 'FridgeOutlineIcon'

FridgeOutlineIcon.defaultProps = {
  size: 24
}

export default FridgeOutlineIcon