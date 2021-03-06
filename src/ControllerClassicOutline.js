import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ControllerClassicOutlineIcon = ({
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
    <path d='M17.5,7C20.54,7 23,9.46 23,12.5C23,15.54 20.54,18 17.5,18C15.79,18 14.27,17.22 13.26,16H10.74C9.73,17.22 8.21,18 6.5,18C3.46,18 1,15.54 1,12.5C1,9.46 3.46,7 6.5,7H17.5M6.5,9C4.57,9 3,10.57 3,12.5C3,14.43 4.57,16 6.5,16C7.9,16 9.1,15.18 9.66,14H14.34C14.9,15.18 16.1,16 17.5,16C19.43,16 21,14.43 21,12.5C21,10.57 19.43,9 17.5,9H6.5M5.75,10.25H7.25V11.75H8.75V13.25H7.25V14.75H5.75V13.25H4.25V11.75H5.75V10.25M16.75,12.5C17.3,12.5 17.75,12.95 17.75,13.5C17.75,14.05 17.3,14.5 16.75,14.5C16.2,14.5 15.75,14.05 15.75,13.5C15.75,12.95 16.2,12.5 16.75,12.5M18.75,10.5C19.3,10.5 19.75,10.95 19.75,11.5C19.75,12.05 19.3,12.5 18.75,12.5C18.2,12.5 17.75,12.05 17.75,11.5C17.75,10.95 18.2,10.5 18.75,10.5Z' />
  </Svg>
)

ControllerClassicOutlineIcon.displayName = 'ControllerClassicOutlineIcon'

ControllerClassicOutlineIcon.defaultProps = {
  size: 24
}

export default ControllerClassicOutlineIcon