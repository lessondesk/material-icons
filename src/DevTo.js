import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DevToIcon = ({
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
    <path d='M7.36,9.87C7.19,9.74 7,9.68 6.84,9.68H6.06V14.34H6.84C7,14.34 7.19,14.28 7.36,14.15C7.54,14 7.62,13.82 7.62,13.56V10.45C7.62,10.19 7.54,10 7.36,9.87M20.04,2H3.96C2.88,2 2,2.88 2,3.96V20.04C2,21.13 2.88,22 3.96,22H20.04C21.12,22 22,21.12 22,20.04V3.96C22,2.87 21.12,2 20.04,2M8.88,13.57C8.88,14.41 8.37,15.68 6.73,15.68H4.65V8.29H6.77C8.35,8.29 8.88,9.56 8.88,10.4V13.57M13.38,9.61H11V11.33H12.45V12.65H11V14.36H13.38V15.68H10.6C10.1,15.7 9.69,15.3 9.68,14.8V9.22C9.67,8.72 10.06,8.31 10.56,8.3H13.38V9.61M18,14.76C17.42,16.13 16.36,15.86 15.89,14.76L14.17,8.3H15.62L16.95,13.37L18.27,8.3H19.72L18,14.76V14.76Z' />
  </Svg>
)

DevToIcon.displayName = 'DevToIcon'

DevToIcon.defaultProps = {
  size: 24
}

export default DevToIcon