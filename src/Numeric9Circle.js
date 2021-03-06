import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric9CircleIcon = ({
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
    <path d='M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M13,17C14.1,17 15,16.1 15,15V9C15,7.9 14.1,7 13,7H11C9.9,7 9,7.9 9,9V11C9,12.1 9.9,13 11,13H13V15H9V17H13M13,11H11V9H13V11Z' />
  </Svg>
)

Numeric9CircleIcon.displayName = 'Numeric9CircleIcon'

Numeric9CircleIcon.defaultProps = {
  size: 24
}

export default Numeric9CircleIcon