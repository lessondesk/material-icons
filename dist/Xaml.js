import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const XamlIcon = ({
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
    <path d='M18.93,12L15.46,18H8.54L5.07,12L8.54,6H15.46L18.93,12M23.77,12L19.73,19L18,18L21.46,12L18,6L19.73,5L23.77,12M0.23,12L4.27,5L6,6L2.54,12L6,18L4.27,19L0.23,12Z' />
  </Svg>
)

XamlIcon.displayName = 'XamlIcon'

XamlIcon.defaultProps = {
  size: 24
}

export default XamlIcon