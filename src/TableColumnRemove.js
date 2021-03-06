import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TableColumnRemoveIcon = ({
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
    <path d='M4,2H11C12.1,2 13,2.9 13,4V20C13,21.1 12.1,22 11,22H4C2.9,22 2,21.1 2,20V4C2,2.9 2.9,2 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z' />
  </Svg>
)

TableColumnRemoveIcon.displayName = 'TableColumnRemoveIcon'

TableColumnRemoveIcon.defaultProps = {
  size: 24
}

export default TableColumnRemoveIcon