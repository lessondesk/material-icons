import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EyeSettingsOutlineIcon = ({
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
    <path d='M12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9M12,4.5C16.86,4.5 21.22,7.5 23,12C20.61,18.08 13.75,21.06 7.67,18.67C4.62,17.47 2.2,15.06 1,12C2.78,7.5 7.14,4.5 12,4.5M3.18,12C5.56,16.87 11.45,18.89 16.32,16.5C18.28,15.54 19.86,13.96 20.82,12C18.44,7.13 12.55,5.11 7.68,7.5C5.72,8.46 4.14,10.04 3.18,12M9,22H7V24H9V22M13,22H11V24H13V22M17,22H15V24H17V22Z' />
  </Svg>
)

EyeSettingsOutlineIcon.displayName = 'EyeSettingsOutlineIcon'

EyeSettingsOutlineIcon.defaultProps = {
  size: 24
}

export default EyeSettingsOutlineIcon