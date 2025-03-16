import * as Toast from "@radix-ui/react-toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { hideToast } from "../../Redux/toastSlice";

const ToastNotification = () => {
  const dispatch = useDispatch();
  const { message, variant, isVisible } = useSelector((state: RootState) => state.toast);

  // Sembunyikan toast setelah 3 detik
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, dispatch]);

  // Warna berdasarkan jenis toast
  const toastColors = {
    success: "bg-green-600 text-white",
    release: "bg-red-600 text-white",
    info: "bg-blue-600 text-white",
  };

  return (
    <Toast.Provider>
      <Toast.Root className={`fixed bottom-5 right-5 p-4 rounded-md shadow-lg transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"} ${toastColors[variant]}`} open={isVisible}>
        <Toast.Title className="font-bold">{variant.toUpperCase()}</Toast.Title>
        <Toast.Description className="text-sm">{message}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-5 right-5 w-64" />
    </Toast.Provider>
  );
};

export default ToastNotification;
