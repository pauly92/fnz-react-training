import React from 'react'
import * as Icons from '@mui/icons-material'

type IconNames = keyof typeof Icons

export type IconProps = {
  iconName: string
}

const IconComponent: React.FC<IconProps> = ({
  iconName,
}) => {
  const Icon = Icons[iconName as IconNames]
  return <Icon />
}

export default IconComponent;