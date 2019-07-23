import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PandoraIcon = ({
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
    <path d='M10,20C10,20.55 9.55,21 9,21H4V3H13.71C17.44,3 20.46,6.02 20.46,9.75C20.46,13.5 17.44,16.5 13.71,16.5H10V20Z' />
  </Svg>
)

PandoraIcon.displayName = 'PandoraIcon'

PandoraIcon.defaultProps = {
  size: 24
}

export default PandoraIcon