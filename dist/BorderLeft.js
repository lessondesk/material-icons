import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BorderLeftIcon = ({
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
    <path d='M15,5H17V3H15M15,13H17V11H15M19,21H21V19H19M19,13H21V11H19M19,5H21V3H19M19,17H21V15H19M15,21H17V19H15M19,9H21V7H19M3,21H5V3H3M7,13H9V11H7M7,5H9V3H7M7,21H9V19H7M11,13H13V11H11M11,9H13V7H11M11,5H13V3H11M11,17H13V15H11M11,21H13V19H11V21Z' />
  </Svg>
)

BorderLeftIcon.displayName = 'BorderLeftIcon'

BorderLeftIcon.defaultProps = {
  size: 24
}

export default BorderLeftIcon