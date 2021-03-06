import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const XboxControllerIcon = ({
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
    <path d='M8.75,15.75C6.75,15.75 6,18 4,19C2,19 0.5,16 4.5,7.5H4.75L5.19,6.67C5.19,6.67 8,5 9.33,6.23H14.67C16,5 18.81,6.67 18.81,6.67L19.25,7.5H19.5C23.5,16 22,19 20,19C18,18 17.25,15.75 15.25,15.75H8.75M12,7C11.45,7 11,7.45 11,8C11,8.55 11.45,9 12,9C12.55,9 13,8.55 13,8C13,7.45 12.55,7 12,7Z' />
  </Svg>
)

XboxControllerIcon.displayName = 'XboxControllerIcon'

XboxControllerIcon.defaultProps = {
  size: 24
}

export default XboxControllerIcon