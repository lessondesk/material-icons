import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RegisteredTrademarkIcon = ({
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
    <path d='M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12.25,13.27H10.81V16.5H9V7.71H12.26C13.29,7.71 14.09,7.94 14.66,8.4C15.22,8.87 15.5,9.5 15.5,10.36C15.5,10.96 15.37,11.46 15.11,11.86C14.85,12.26 14.46,12.58 13.93,12.81L15.83,16.4V16.5H13.89L12.25,13.27M10.81,11.81H12.27C12.72,11.81 13.07,11.69 13.32,11.46C13.57,11.23 13.69,10.91 13.69,10.5C13.69,10.09 13.58,9.77 13.34,9.53C13.11,9.29 12.75,9.18 12.26,9.18H10.81V11.81Z' />
  </Svg>
)

RegisteredTrademarkIcon.displayName = 'RegisteredTrademarkIcon'

RegisteredTrademarkIcon.defaultProps = {
  size: 24
}

export default RegisteredTrademarkIcon