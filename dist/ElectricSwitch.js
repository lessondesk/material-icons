import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ElectricSwitchIcon = ({
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
    <path d='M1,11H3.17C3.58,9.83 4.69,9 6,9C6.65,9 7.25,9.21 7.74,9.56L14.44,4.87L15.58,6.5L8.89,11.2C8.96,11.45 9,11.72 9,12C9,13.66 7.66,15 6,15C4.69,15 3.58,14.17 3.17,13H1V11M23,11V13H20.83C20.42,14.17 19.31,15 18,15C16.34,15 15,13.66 15,12C15,10.34 16.34,9 18,9C19.31,9 20.42,9.83 20.83,11H23M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z' />
  </Svg>
)

ElectricSwitchIcon.displayName = 'ElectricSwitchIcon'

ElectricSwitchIcon.defaultProps = {
  size: 24
}

export default ElectricSwitchIcon