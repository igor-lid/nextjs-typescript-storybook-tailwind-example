import React, { FC, HTMLAttributes } from 'react';

export interface PillProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  size: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactNode;
  classes?: string;
}

export const Pill: FC<PillProps> = ({
  text,
  size = 'small',
  backgroundColor,
  textColor,
  children,
  classes
}) => {
  const sizeMap = {
    small: 'px-4 py-1',
    medium: 'px-6 py-2',
    large: 'px-8 py-3'
  };

  return (
    <div
      className={[classes, 'rounded-xl inline-block text-sm', `${sizeMap[size]}`].join(' ')}
      style={{ background: `${backgroundColor}` }}>
      <span style={{ color: `${textColor}` }}>{text}</span>
      {children}
    </div>
  );
};
