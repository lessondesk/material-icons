import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TriangleOutlineIcon = ({
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
    <path d='M12,2L1,21H23M12,6L19.53,19H4.47' />
  </Svg>
)

TriangleOutlineIcon.displayName = 'TriangleOutlineIcon'

TriangleOutlineIcon.defaultProps = {
  size: 24
}

export default TriangleOutlineIcon