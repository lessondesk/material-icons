import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowUpBoldBoxIcon = ({
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
    <path d='M19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21M12,7L7,12H10V16H14V12H17L12,7Z' />
  </Svg>
)

ArrowUpBoldBoxIcon.displayName = 'ArrowUpBoldBoxIcon'

ArrowUpBoldBoxIcon.defaultProps = {
  size: 24
}

export default ArrowUpBoldBoxIcon