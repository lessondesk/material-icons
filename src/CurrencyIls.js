import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CurrencyIlsIcon = ({
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
    <path d='M22,16C22,18.76 19.76,21 17,21H8V9H10V19H17C18.66,19 20,17.66 20,16V3H22V16M16,8V15H14V8C14,6.34 12.66,5 11,5H4V21H2V3H11C13.76,3 16,5.24 16,8Z' />
  </Svg>
)

CurrencyIlsIcon.displayName = 'CurrencyIlsIcon'

CurrencyIlsIcon.defaultProps = {
  size: 24
}

export default CurrencyIlsIcon