import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RotateLeftVariantIcon = ({
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
    <path d='M4,2H7C8.1,2 9,2.9 9,4V20C9,21.1 8.1,22 7,22H4C2.9,22 2,21.1 2,20V4C2,2.9 2.9,2 4,2M20,15C21.1,15 22,15.9 22,17V20C22,21.1 21.1,22 20,22H11V15H20M14,4C18.42,4 22,7.58 22,12L21.94,13H19.92L20,12C20,8.69 17.31,6 14,6V9L10,5L14,1V4Z' />
  </Svg>
)

RotateLeftVariantIcon.displayName = 'RotateLeftVariantIcon'

RotateLeftVariantIcon.defaultProps = {
  size: 24
}

export default RotateLeftVariantIcon