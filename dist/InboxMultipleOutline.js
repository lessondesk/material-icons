import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const InboxMultipleOutlineIcon = ({
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
    <path d='M19,3C20.1,3 21,3.9 21,5V12C21,13.1 20.1,14 19,14H5C3.9,14 3,13.1 3,12V5C3,3.9 3.9,3 5,3H19M5,10V12H9.4C8.8,11.47 8.34,10.78 8.13,10H5M19,12V10H15.87C15.66,10.78 15.2,11.47 14.6,12H19M19,8V5H5V8H10V9C10,10.07 10.93,11 12,11C13.07,11 14,10.07 14,9V8H19M21,19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V15H10V16C10,17.07 10.93,18 12,18C13.07,18 14,17.07 14,16V15H21V19M5,17V19H9.4C8.8,18.47 8.34,17.78 8.13,17H5M19,19V17H15.87C15.66,17.78 15.2,18.47 14.6,19H19Z' />
  </Svg>
)

InboxMultipleOutlineIcon.displayName = 'InboxMultipleOutlineIcon'

InboxMultipleOutlineIcon.defaultProps = {
  size: 24
}

export default InboxMultipleOutlineIcon