import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CurrencyRialIcon = ({
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
    <path d='M11,17H13V19H11V17M14,17H16V19H14V17M9,4H11V15C11,17.21 9.21,19 7,19H5C3.34,19 2,17.66 2,16V12H4V16C4,16.55 4.45,17 5,17H7C8.11,17 9,16.11 9,15V4M12,4H14V13H17V8H19V13C19,14.11 18.11,15 17,15H14C12.89,15 12,14.11 12,13V4M20,10H22V17C22,18.66 20.66,20 19,20H17V18H19C19.55,18 20,17.55 20,17V10Z' />
  </Svg>
)

CurrencyRialIcon.displayName = 'CurrencyRialIcon'

CurrencyRialIcon.defaultProps = {
  size: 24
}

export default CurrencyRialIcon