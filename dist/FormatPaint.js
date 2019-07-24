import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatPaintIcon = ({
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
    <path d='M18,4V3C18,2.45 17.55,2 17,2H5C4.45,2 4,2.45 4,3V7C4,7.55 4.45,8 5,8H17C17.55,8 18,7.55 18,7V6H19V10H9V21C9,21.55 9.45,22 10,22H12C12.55,22 13,21.55 13,21V12H21V4H18Z' />
  </Svg>
)

FormatPaintIcon.displayName = 'FormatPaintIcon'

FormatPaintIcon.defaultProps = {
  size: 24
}

export default FormatPaintIcon