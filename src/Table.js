import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TableIcon = ({
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
    <path d='M5,4H19C20.1,4 21,4.9 21,6V18C21,19.1 20.1,20 19,20H5C3.9,20 3,19.1 3,18V6C3,4.9 3.9,4 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z' />
  </Svg>
)

TableIcon.displayName = 'TableIcon'

TableIcon.defaultProps = {
  size: 24
}

export default TableIcon