import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlaylistMusicOutlineIcon = ({
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
    <path d='M15,6V8H3V6H15M15,10V12H3V10H15M3,16V14H11V16H3M17,6H22V8H19V17C19,18.66 17.66,20 16,20C14.34,20 13,18.66 13,17C13,15.34 14.34,14 16,14C16.35,14 16.69,14.07 17,14.18V6M16,16C15.45,16 15,16.45 15,17C15,17.55 15.45,18 16,18C16.55,18 17,17.55 17,17C17,16.45 16.55,16 16,16Z' />
  </Svg>
)

PlaylistMusicOutlineIcon.displayName = 'PlaylistMusicOutlineIcon'

PlaylistMusicOutlineIcon.defaultProps = {
  size: 24
}

export default PlaylistMusicOutlineIcon