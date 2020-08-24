import * as React from 'react';
import * as OutlineIcons from './icons/outline';
import * as SolidIcons from './icons/solid';

interface BaseProps {
  className?: string;
}

interface SolidProps extends BaseProps{
  variant?: 'solid'
  icon: keyof typeof SolidIcons
}

interface OutlineProps extends BaseProps {
  variant?: 'outline'
  icon: keyof typeof OutlineIcons;
}

export type Props = SolidProps | OutlineProps

export function Icon({variant = "solid", icon, className}: Props){
  const icons = variant === 'solid' ? SolidIcons : OutlineIcons;
  const Icon = icons[icon];
  return <Icon className={className} />
}