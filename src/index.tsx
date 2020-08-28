import React from 'react';
import SolidIcons, { SolidType } from './icons/solid';
import OutlineIcons, { OutlineType } from './icons/outline';

interface BaseProps {
  className?: string;
}

interface SolidProps extends BaseProps {
  variant?: 'solid';
  icon: SolidType;
}

interface OutlineProps extends BaseProps {
  variant?: 'outline';
  icon: OutlineType;
}

export type Props = SolidProps | OutlineProps;

export function Icon({ variant = 'solid', icon, className }: Props) {
  const icons = variant === 'solid' ? SolidIcons : OutlineIcons;
  const Icon = icons[icon];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} />;
}
