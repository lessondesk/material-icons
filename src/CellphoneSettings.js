import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CellphoneSettingsIcon = ({
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
    <path d='M16,16H8V4H16M16,0H8C6.9,0 6,0.9 6,2V18C6,19.1 6.9,20 8,20H16C17.1,20 18,19.1 18,18V2C18,0.9 17.1,0 16,0M15,24H17V22H15M11,24H13V22H11M7,24H9V22H7V24Z' />
  </Svg>
)

CellphoneSettingsIcon.displayName = 'CellphoneSettingsIcon'

CellphoneSettingsIcon.defaultProps = {
  size: 24
}

export default CellphoneSettingsIcon