type ButtonVariant = 'primary' | 'secondary' | 'theme';

export interface VButtonProps {
  buttonText?: string;
  targetId?: string | null;
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?: any;
}
