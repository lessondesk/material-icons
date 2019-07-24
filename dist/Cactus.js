import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CactusIcon = ({
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
    <path d='M14,16V21H10V18H9C7.34,18 6,16.66 6,15V12C6,11.45 6.45,11 7,11C7.55,11 8,11.45 8,12V15C8,15.56 8.45,16 9,16H10V6C10,4.9 10.9,4 12,4C13.1,4 14,4.9 14,6V14H15C15.55,14 16,13.55 16,13V11C16,10.45 16.45,10 17,10C17.55,10 18,10.45 18,11V13C18,14.66 16.66,16 15,16H14Z' />
  </Svg>
)

CactusIcon.displayName = 'CactusIcon'

CactusIcon.defaultProps = {
  size: 24
}

export default CactusIcon