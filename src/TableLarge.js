import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TableLargeIcon = ({
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
    <path d='M4,3H20C21.1,3 22,3.9 22,5V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V5C2,3.9 2.9,3 4,3M4,7V10H8V7H4M10,7V10H14V7H10M20,10V7H16V10H20M4,12V15H8V12H4M4,20H8V17H4V20M10,12V15H14V12H10M10,20H14V17H10V20M20,20V17H16V20H20M20,12H16V15H20V12Z' />
  </Svg>
)

TableLargeIcon.displayName = 'TableLargeIcon'

TableLargeIcon.defaultProps = {
  size: 24
}

export default TableLargeIcon