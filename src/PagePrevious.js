import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PagePreviousIcon = ({
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
    <path d='M4,21H19C20.1,21 21,20.1 21,19V13H17V15L13,12L17,9V11H21V5C21,3.9 20.1,3 19,3H4C2.9,3 2,3.9 2,5V19C2,20.1 2.9,21 4,21M4,15H8V17H4V15M4,11H11V13H4V11M4,7H11V9H4V7M21,11H24V13H21V11Z' />
  </Svg>
)

PagePreviousIcon.displayName = 'PagePreviousIcon'

PagePreviousIcon.defaultProps = {
  size: 24
}

export default PagePreviousIcon