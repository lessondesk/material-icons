import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DropboxIcon = ({
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
    <path d='M12,14.56L16.35,18.16L18.2,16.95V18.3L12,22L5.82,18.3V16.95L7.68,18.16L12,14.56M7.68,2.5L12,6.09L16.32,2.5L22.5,6.5L18.23,9.94L22.5,13.36L16.32,17.39L12,13.78L7.68,17.39L1.5,13.36L5.77,9.94L1.5,6.5L7.68,2.5M12,13.68L18.13,9.94L12,6.19L5.87,9.94L12,13.68Z' />
  </Svg>
)

DropboxIcon.displayName = 'DropboxIcon'

DropboxIcon.defaultProps = {
  size: 24
}

export default DropboxIcon