import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DotsVerticalCircleOutlineIcon = ({
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
    <path d='M10.5,12C10.5,11.17 11.17,10.5 12,10.5C12.83,10.5 13.5,11.17 13.5,12C13.5,12.83 12.83,13.5 12,13.5C11.17,13.5 10.5,12.83 10.5,12M10.5,16.5C10.5,15.67 11.17,15 12,15C12.83,15 13.5,15.67 13.5,16.5C13.5,17.33 12.83,18 12,18C11.17,18 10.5,17.33 10.5,16.5M10.5,7.5C10.5,6.67 11.17,6 12,6C12.83,6 13.5,6.67 13.5,7.5C13.5,8.33 12.83,9 12,9C11.17,9 10.5,8.33 10.5,7.5M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4Z' />
  </Svg>
)

DotsVerticalCircleOutlineIcon.displayName = 'DotsVerticalCircleOutlineIcon'

DotsVerticalCircleOutlineIcon.defaultProps = {
  size: 24
}

export default DotsVerticalCircleOutlineIcon