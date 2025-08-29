export type InputProps = {
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
};

export type ButtonProps = {
  title: string;
  handleClick: () => void;
  type?: string;
  styles: "main" | "borderless";
};

export type Course = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  price: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  videoUrl: string;
};
