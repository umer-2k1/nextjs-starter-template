import React from 'react';
import { cn } from '@/lib/utils';

type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type MantineSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

type GridProps = {
  align?: AlignItems;
  justify?: JustifyContent;
  gutter?: MantineSpacing;
  columns?: number;
  grow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type GridColProps = {
  span?:
    | number
    | {
        base?: number;
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
      };
  offset?: number;
  order?: number;
  className?: string;
  children: React.ReactNode;
};

// Utility function to handle responsive span values
const getResponsiveClass = (
  span?: GridColProps['span'],
  prefix = 'col-span'
) => {
  if (!span) return '';
  if (typeof span === 'number') return `${prefix}-${span}`;

  return Object.entries(span)
    .map(([key, value]) =>
      value !== undefined ? `${prefix}-${key}-${value}` : ''
    )
    .join(' ');
};

// Grid Component
const Grid: React.FC<GridProps> = ({
  align = 'stretch',
  justify = 'flex-start',
  gutter = 'md',
  columns = 12,
  grow = false,
  className,
  children,
}) => {
  const classes = cn(
    'grid',
    `grid-align-${align}`,
    `grid-justify-${justify}`,
    `grid-gutter-${gutter}`,
    { 'grid-grow': grow },
    className
  );

  const style = {
    '--grid-columns': columns,
    '--grid-gutter': typeof gutter === 'number' ? `${gutter}px` : gutter,
  } as React.CSSProperties;

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

// Grid.Col Component
const GridCol: React.FC<GridColProps> = ({
  span,
  offset = 0,
  order,
  className,
  children,
}) => {
  const classes = cn(
    'grid-col',
    getResponsiveClass(span),
    offset > 0 && `col-offset-${offset}`,
    order !== undefined && `col-order-${order}`,
    className
  );

  return <div className={classes}>{children}</div>;
};

export { Grid, GridCol };
