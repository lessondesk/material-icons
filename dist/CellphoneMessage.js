import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CellphoneMessageIcon = ({
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
    <path d='M11,17V7H4V17H11M11,3C12.1,3 13,3.9 13,5V19C13,20.1 12.1,21 11,21H4C2.89,21 2,20.1 2,19V5C2,3.9 2.9,3 4,3H11M16.5,3H21.5C22.33,3 23,3.67 23,4.5V7.5C23,8.33 22.33,9 21.5,9H18L15,12V9L15,4.5C15,3.67 15.67,3 16.5,3Z' />
  </Svg>
)

CellphoneMessageIcon.displayName = 'CellphoneMessageIcon'

CellphoneMessageIcon.defaultProps = {
  size: 24
}

export default CellphoneMessageIcon