import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: string;
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);
  return (
    <div
      className={`${
        type === "SUCCESS" ? "bg-green-500" : "bg-red-700"
      } fixed top-4 right-4 z-50 max-w-md text-white p-3`}
    >
      <div>{message}</div>
    </div>
  );
};

export default Toast;
