import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ClipboardAccountOutlineIcon = ({
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
    <path d='M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,3C11.45,3 11,3.45 11,4C11,4.55 11.45,5 12,5C12.55,5 13,4.55 13,4C13,3.45 12.55,3 12,3M7,7V5H5V19H19V5H17V7H7M12,9C13.1,9 14,9.9 14,11C14,12.1 13.1,13 12,13C10.9,13 10,12.1 10,11C10,9.9 10.9,9 12,9M8,17V16C8,14.9 9.79,14 12,14C14.21,14 16,14.9 16,16V17H8Z' />
  </Svg>
)

ClipboardAccountOutlineIcon.displayName = 'ClipboardAccountOutlineIcon'

ClipboardAccountOutlineIcon.defaultProps = {
  size: 24
}

export default ClipboardAccountOutlineIcon