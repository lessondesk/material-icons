import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChevronRightBoxOutlineIcon = ({
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
    <path d='M19,3H5C3.9,3 3,3.9 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M8.29,16.59L12.88,12L8.29,7.41L9.71,6L15.71,12L9.71,18L8.29,16.59Z' />
  </Svg>
)

ChevronRightBoxOutlineIcon.displayName = 'ChevronRightBoxOutlineIcon'

ChevronRightBoxOutlineIcon.defaultProps = {
  size: 24
}

export default ChevronRightBoxOutlineIcon