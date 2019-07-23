import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CellphoneOffIcon = ({
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
    <path d='M2.38,1.73L1.11,3L5,6.89V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V20.89L20.84,22.73L22.11,21.46M17,19H7V8.89L17,18.89V19M17,5V13.8L19,15.8V3C19,1.9 18.1,1 17,1H7C6.28,1 5.6,1.37 5.24,2L8.24,5H17Z' />
  </Svg>
)

CellphoneOffIcon.displayName = 'CellphoneOffIcon'

CellphoneOffIcon.defaultProps = {
  size: 24
}

export default CellphoneOffIcon