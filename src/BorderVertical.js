import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BorderVerticalIcon = ({
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
    <path d='M15,13H17V11H15M15,21H17V19H15M15,5H17V3H15M19,9H21V7H19M19,5H21V3H19M19,13H21V11H19M19,21H21V19H19M11,21H13V3H11M19,17H21V15H19M7,5H9V3H7M3,17H5V15H3M3,21H5V19H3M3,13H5V11H3M7,13H9V11H7M7,21H9V19H7M3,5H5V3H3M3,9H5V7H3V9Z' />
  </Svg>
)

BorderVerticalIcon.displayName = 'BorderVerticalIcon'

BorderVerticalIcon.defaultProps = {
  size: 24
}

export default BorderVerticalIcon