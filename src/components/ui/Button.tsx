export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return <button style={{color: }}></button>;
};
