import React from "react";

export default function ThanosGlove(props: ThanosGloveProps): JSX.Element;

interface ThanosGloveProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  duration?: number
  type?: 'snap' | 'time'
  mute?: boolean
}
