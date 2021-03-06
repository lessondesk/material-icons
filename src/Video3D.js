import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Video3DIcon = ({
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
    <path d='M5,7H9C10.1,7 11,7.9 11,9V15C11,16.1 10.1,17 9,17H5V15H9V13H6V11H9V9H5V7M13,7H16C17.66,7 19,8.34 19,10V14C19,15.66 17.66,17 16,17H13V7M16,15C16.55,15 17,14.55 17,14V10C17,9.45 16.55,9 16,9H15V15H16Z' />
  </Svg>
)

Video3DIcon.displayName = 'Video3DIcon'

Video3DIcon.defaultProps = {
  size: 24
}

export default Video3DIcon