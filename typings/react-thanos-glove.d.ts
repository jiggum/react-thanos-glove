import React from 'react'

export default function ThanosGlove(props: ThanosGloveProps): JSX.Element

interface ThanosGloveProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  size?: number
  duration?: number
  type?: 'snap' | 'time'
  mute?: boolean
  onClick?: (e: any) => void
  onAnimationEnd?: (e: any) => void
}
