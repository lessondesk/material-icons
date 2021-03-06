import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ExportVariantIcon = ({
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
    <path d='M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9C4,7.9 4.9,7 6,7H9V9H6V21H18V9H15V7H18C19.1,7 20,7.9 20,9V21C20,22.1 19.1,23 18,23Z' />
  </Svg>
)

ExportVariantIcon.displayName = 'ExportVariantIcon'

ExportVariantIcon.defaultProps = {
  size: 24
}

export default ExportVariantIcon