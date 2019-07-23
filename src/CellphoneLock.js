import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CellphoneLockIcon = ({
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
    <path d='M17,1H7C5.9,1 5,1.9 5,3V6H7V4H17V20H7V18H5V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.9 18.1,1 17,1M8.8,11V9.5C8.8,8.1 7.4,7 6,7C4.6,7 3.2,8.1 3.2,9.5V11C2.6,11 2,11.6 2,12.2V15.7C2,16.4 2.6,17 3.2,17H8.7C9.4,17 10,16.4 10,15.8V12.3C10,11.6 9.4,11 8.8,11M7.5,11H4.5V9.5C4.5,8.7 5.2,8.2 6,8.2C6.8,8.2 7.5,8.7 7.5,9.5V11Z' />
  </Svg>
)

CellphoneLockIcon.displayName = 'CellphoneLockIcon'

CellphoneLockIcon.defaultProps = {
  size: 24
}

export default CellphoneLockIcon