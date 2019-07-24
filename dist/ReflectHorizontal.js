import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ReflectHorizontalIcon = ({
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
    <path d='M22,20H14C13.45,20 13,19.55 13,19V4.97C13,4.5 13.31,4.12 13.74,4C14.19,3.88 14.65,4.08 14.87,4.47L22.89,18.5C23.07,18.81 23.07,19.19 22.89,19.5C22.71,19.81 22.38,20 22,20M2,20C1.62,20 1.29,19.81 1.11,19.5C0.93,19.19 0.93,18.81 1.11,18.5L9.13,4.47C9.35,4.08 9.81,3.88 10.26,4C10.69,4.12 11,4.5 11,4.97V19C11,19.55 10.55,20 10,20H2M9,18V8.74L3.71,18H9Z' />
  </Svg>
)

ReflectHorizontalIcon.displayName = 'ReflectHorizontalIcon'

ReflectHorizontalIcon.defaultProps = {
  size: 24
}

export default ReflectHorizontalIcon