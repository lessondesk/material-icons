import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SafetyGogglesIcon = ({
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
    <path d='M18,9C19.11,9 20,9.89 20,11V14C20,15.11 19.11,16 18,16H15.77L14.53,14.77C13.78,14 12.77,13.6 11.7,13.6C10.63,13.6 9.63,14 8.87,14.77L7.64,16H6C4.89,16 4,15.11 4,14V11C4,9.89 4.89,9 6,9H18M18,7H6C3.79,7 2,8.79 2,11H2L1,11V14H2V14C2,16.21 3.79,18 6,18H8.5C8.54,17.94 8.59,17.88 10.29,16.18C10.68,15.79 11.19,15.6 11.7,15.6C12.22,15.6 12.73,15.79 13.12,16.18L14.91,18H18C20.21,18 22,16.21 22,14H22L23,14V11H22V11C22,8.79 20.21,7 18,7Z' />
  </Svg>
)

SafetyGogglesIcon.displayName = 'SafetyGogglesIcon'

SafetyGogglesIcon.defaultProps = {
  size: 24
}

export default SafetyGogglesIcon