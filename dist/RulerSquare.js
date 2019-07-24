import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RulerSquareIcon = ({
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
    <path d='M3,5V21H9V19.5H7V18H9V16.5H5V15H9V13.5H7V12H9V10.5H5V9H9V5H10.5V9H12V7H13.5V9H15V5H16.5V9H18V7H19.5V9H21V3H5C3.9,3 3,3.9 3,5M6,7C5.45,7 5,6.55 5,6C5,5.45 5.45,5 6,5C6.55,5 7,5.45 7,6C7,6.55 6.55,7 6,7Z' />
  </Svg>
)

RulerSquareIcon.displayName = 'RulerSquareIcon'

RulerSquareIcon.defaultProps = {
  size: 24
}

export default RulerSquareIcon