import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TargetAccountIcon = ({
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
    <path d='M20.95,11H22.5V13H20.95C20.5,17.17 17.17,20.5 13,20.95V22.5H11V20.95C6.83,20.5 3.5,17.17 3.05,13H1.5V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1.5H13V3.05C17.17,3.5 20.5,6.83 20.95,11M5.07,11H6.5V13H5.07C5.5,16.07 7.93,18.5 11,18.93V17.5H13V18.93C16.07,18.5 18.5,16.07 18.93,13H17.5V11H18.93C18.5,7.93 16.07,5.5 13,5.07V6.5H11V5.07C7.93,5.5 5.5,7.93 5.07,11M16,16H8V15C8,13.67 10.67,13 12,13C13.33,13 16,13.67 16,15V16M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8Z' />
  </Svg>
)

TargetAccountIcon.displayName = 'TargetAccountIcon'

TargetAccountIcon.defaultProps = {
  size: 24
}

export default TargetAccountIcon