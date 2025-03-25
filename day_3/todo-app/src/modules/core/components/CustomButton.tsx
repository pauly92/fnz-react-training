import { Button } from "@mui/material";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  variant?: "contained" | "outlined" | "text";
}

const CustomButton = ({ label, onClick, variant = "contained" }: CustomButtonProps) => {
  return <Button variant={variant} onClick={onClick}>{label}</Button>;
};

export default CustomButton;
