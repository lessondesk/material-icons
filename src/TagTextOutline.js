import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TagTextOutlineIcon = ({
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
    <path d='M5.5,7C6.33,7 7,6.33 7,5.5C7,4.67 6.33,4 5.5,4C4.67,4 4,4.67 4,5.5C4,6.33 4.67,7 5.5,7M21.41,11.58C21.77,11.94 22,12.44 22,13C22,13.55 21.78,14.05 21.41,14.41L14.41,21.41C14.05,21.77 13.55,22 13,22C12.45,22 11.95,21.77 11.58,21.41L2.59,12.41C2.22,12.05 2,11.55 2,11V4C2,2.89 2.89,2 4,2H11C11.55,2 12.05,2.22 12.41,2.58L21.41,11.58M13,20L20,13L11.5,4.5L4.5,11.5L13,20M10.09,8.91L11.5,7.5L17,13L15.59,14.41L10.09,8.91M7.59,11.41L9,10L13,14L11.59,15.41L7.59,11.41Z' />
  </Svg>
)

TagTextOutlineIcon.displayName = 'TagTextOutlineIcon'

TagTextOutlineIcon.defaultProps = {
  size: 24
}

export default TagTextOutlineIcon