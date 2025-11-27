import { CheckCircle } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">¡Enviado!</h3>
        <p className="text-gray-600 mb-6">
          Gracias por contactarnos. Te responderemos muy pronto.
        </p>
        <button
          onClick={onClose}
          className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:bg-secondary/90 transition font-bold w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
