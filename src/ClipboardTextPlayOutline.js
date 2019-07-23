import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ClipboardTextPlayOutlineIcon = ({
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
    <path d='M19,3H14.82C14.25,1.44 12.53,0.64 11,1.2C10.14,1.5 9.5,2.16 9.18,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H15V19H5V5H7V7H17V5H19V14H21V5C21,3.9 20.1,3 19,3M12,5C11.45,5 11,4.55 11,4C11,3.45 11.45,3 12,3C12.55,3 13,3.45 13,4C13,4.55 12.55,5 12,5M17,16V22L22,19L17,16M17,11H7V9H17V11M15,15H7V13H15V15Z' />
  </Svg>
)

ClipboardTextPlayOutlineIcon.displayName = 'ClipboardTextPlayOutlineIcon'

ClipboardTextPlayOutlineIcon.defaultProps = {
  size: 24
}

export default ClipboardTextPlayOutlineIcon