import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ShapeOutlineIcon = ({
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
    <path d='M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15C16.12,15 15,16.12 15,17.5C15,18.88 16.12,20 17.5,20C18.88,20 20,18.88 20,17.5C20,16.12 18.88,15 17.5,15Z' />
  </Svg>
)

ShapeOutlineIcon.displayName = 'ShapeOutlineIcon'

ShapeOutlineIcon.defaultProps = {
  size: 24
}

export default ShapeOutlineIcon