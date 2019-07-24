import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BellAlertIcon = ({
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
    <path d='M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29V4C10,2.9 10.9,2 12,2C13.1,2 14,2.9 14,4V4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21C14,22.1 13.1,23 12,23C10.9,23 10,22.1 10,21H14M11,8V13H13V8H11M11,15V17H13V15H11Z' />
  </Svg>
)

BellAlertIcon.displayName = 'BellAlertIcon'

BellAlertIcon.defaultProps = {
  size: 24
}

export default BellAlertIcon