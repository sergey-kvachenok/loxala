export interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  destructive?: boolean;
  variant?: 'default' | 'rounded';
}
