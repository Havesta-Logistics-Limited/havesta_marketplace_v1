import { ArrowLeft, MapPin, Plus } from "lucide-react";
import Modal from "./Modal";
import { useState } from "react";
import NewAddressForm from "../VendorComponents/NewAddressForm";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const DeliveryModal = ({ isOpen, onClose }) => {
  const [addresses, setAddresses] = useState([
    "Obafemi Awolowo Way",
    "4 Ajeboriogbon street Sabo Road, Ikorodu.",
  ]);

  const [step, setStep] = useState("list"); // "list" | "form"
  const handleClose = () => {
    setStep("list");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Select a delivery address"
      className="min-w-[800px] max-h-[90vh]"
    >
      <div className="flex flex-col h-[400px] w-full relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          {step === "list" && (
            <motion.div
              key="list"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col h-full"
            >
              {/* Scrollable addresses  */}
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <div className="space-y-4">
                  {addresses.map((address, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 border border-gray-200 rounded-md px-4 py-3 cursor-pointer hover:border-green-600 transition"
                    >
                      <MapPin className="text-green-600" size={18} />
                      <span className="text-gray-800 text-sm">{address}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sticky footer */}
              <div className="flex-shrink-0 pt-4 border-t mt-2 bg-white">
                <button
                  onClick={() => setStep("form")}
                  className="flex items-center justify-center w-full py-2 text-sm text-green-600 border border-dashed border-green-600 rounded-md hover:bg-green-50 transition"
                >
                  <Plus size={16} className="mr-1" />
                  Add A New Address
                </button>
              </div>
            </motion.div>
          )}

          {step === "form" && (
            <motion.div
              key="form"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex-1"
            >
              <NewAddressForm
                addresses={addresses}
                setAddresses={setAddresses}
                setStep={setStep}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
};

export default DeliveryModal;
