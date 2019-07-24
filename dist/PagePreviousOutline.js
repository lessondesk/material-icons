import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PagePreviousOutlineIcon = ({
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
    <path d='M2,3H19C20.1,3 21,3.9 21,5V9H19V5H2V19H19V15H21V19C21,20.1 20.1,21 19,21H2C0.9,21 0,20.1 0,19V5C0,3.9 0.9,3 2,3M17,15V13H24V11H17V9L13,12L17,15M4,13H11V11H4V13M4,9H11V7H4V9M4,17H8V15H4V17Z' />
  </Svg>
)

PagePreviousOutlineIcon.displayName = 'PagePreviousOutlineIcon'

PagePreviousOutlineIcon.defaultProps = {
  size: 24
}

export default PagePreviousOutlineIcon