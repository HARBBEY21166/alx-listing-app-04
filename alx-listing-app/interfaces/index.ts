export interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    price?: number;
  }
  
  export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
  }