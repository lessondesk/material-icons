import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Video3DVariantIcon = ({
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
    <path d='M14,10V14C14,14.28 13.78,14.5 13.5,14.5H12.5V9.5H13.5C13.78,9.5 14,9.72 14,10M21,6.5V17.5L17,13.5V17C17,17.55 16.55,18 16,18H4C3.45,18 3,17.55 3,17V7C3,6.45 3.45,6 4,6H16C16.55,6 17,6.45 17,7V10.5M9.5,9.5C9.5,8.67 8.83,8 8,8H4.5V9.5H8V11.25H5.5V12.75H8V14.5H4.5V16H8C8.83,16 9.5,15.33 9.5,14.5M15.5,9.5C15.5,8.67 14.83,8 14,8H11V16H14C14.83,16 15.5,15.33 15.5,14.5' />
  </Svg>
)

Video3DVariantIcon.displayName = 'Video3DVariantIcon'

Video3DVariantIcon.defaultProps = {
  size: 24
}

export default Video3DVariantIcon