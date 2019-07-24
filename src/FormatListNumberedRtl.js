import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatListNumberedRtlIcon = ({
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
    <path d='M3,13V11H17V13H3M3,19V17H17V19H3M3,7V5H17V7H3M20,8V5H19V4H21V8H20M19,17V16H22V20H19V19H21V18.5H20V17.5H21V17H19M21.25,10C21.67,10 22,10.34 22,10.75C22,10.95 21.92,11.14 21.79,11.27L20.12,13H22V14H19V13.08L21,11H19V10H21.25Z' />
  </Svg>
)

FormatListNumberedRtlIcon.displayName = 'FormatListNumberedRtlIcon'

FormatListNumberedRtlIcon.defaultProps = {
  size: 24
}

export default FormatListNumberedRtlIcon