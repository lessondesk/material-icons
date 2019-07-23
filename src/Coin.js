import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CoinIcon = ({
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
    <path d='M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M11,17V16H9V14H13V13H10C9.45,13 9,12.55 9,12V9C9,8.45 9.45,8 10,8H11V7H13V8H15V10H11V11H14C14.55,11 15,11.45 15,12V15C15,15.55 14.55,16 14,16H13V17H11Z' />
  </Svg>
)

CoinIcon.displayName = 'CoinIcon'

CoinIcon.defaultProps = {
  size: 24
}

export default CoinIcon