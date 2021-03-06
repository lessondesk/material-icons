import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CellphoneDockIcon = ({
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
    <path d='M16,15H8V5H16M16,1H8C6.89,1 6,1.89 6,3V17C6,18.1 6.9,19 8,19H16C17.1,19 18,18.1 18,17V3C18,1.89 17.1,1 16,1M8,23H16V21H8V23Z' />
  </Svg>
)

CellphoneDockIcon.displayName = 'CellphoneDockIcon'

CellphoneDockIcon.defaultProps = {
  size: 24
}

export default CellphoneDockIcon