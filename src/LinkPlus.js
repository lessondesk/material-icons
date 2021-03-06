import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LinkPlusIcon = ({
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
    <path d='M7,7H11V9H7C5.34,9 4,10.34 4,12C4,13.66 5.34,15 7,15H11V17H7C4.24,17 2,14.76 2,12C2,9.24 4.24,7 7,7M17,7C19.76,7 22,9.24 22,12H20C20,10.34 18.66,9 17,9H13V7H17M8,11H16V13H8V11M17,12H19V15H22V17H19V20H17V17H14V15H17V12Z' />
  </Svg>
)

LinkPlusIcon.displayName = 'LinkPlusIcon'

LinkPlusIcon.defaultProps = {
  size: 24
}

export default LinkPlusIcon