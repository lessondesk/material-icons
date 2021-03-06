import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeModernIcon = ({
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
    <path d='M6,21V8C6,6.9 6.9,6 8,6L16,3V6C17.1,6 18,6.9 18,8V21H12V16H8V21H6M14,19H16V16H14V19M8,13H10V9H8V13M12,13H16V9H12V13Z' />
  </Svg>
)

HomeModernIcon.displayName = 'HomeModernIcon'

HomeModernIcon.defaultProps = {
  size: 24
}

export default HomeModernIcon