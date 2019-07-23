import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TableRemoveIcon = ({
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
    <path d='M15.46,15.88L16.88,14.46L19,16.59L21.12,14.46L22.54,15.88L20.41,18L22.54,20.12L21.12,21.54L19,19.41L16.88,21.54L15.46,20.12L17.59,18L15.46,15.88M4,3H18C19.1,3 20,3.9 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4C2.9,19 2,18.1 2,17V5C2,3.9 2.9,3 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z' />
  </Svg>
)

TableRemoveIcon.displayName = 'TableRemoveIcon'

TableRemoveIcon.defaultProps = {
  size: 24
}

export default TableRemoveIcon