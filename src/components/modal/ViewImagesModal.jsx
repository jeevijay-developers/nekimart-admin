import React from "react";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

const ViewImagesModal = ({ staff, onClose }) => {
  return (
    <Dialog open={!!staff} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white max-w-2xl w-full rounded p-4 space-y-4 overflow-y-auto max-h-[80vh] shadow-xl">
          <div className="flex justify-between items-center border-b pb-2">
            <Dialog.Title className="text-lg font-semibold">
              View Documents
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            {staff.logoUrl && (
              <div>
                <p className="font-semibold">Logo:</p>
                <img
                  src={staff.logoUrl}
                  alt="Logo"
                  className="w-full rounded border"
                />
              </div>
            )}
            {staff.aadharCardUrl && (
              <div>
                <p className="font-semibold">Aadhar Card:</p>
                <img
                  src={staff.aadharCardUrl}
                  alt="Aadhar"
                  className="w-full rounded border"
                />
              </div>
            )}
            {staff.panCardUrl && (
              <div>
                <p className="font-semibold">PAN Card:</p>
                <img
                  src={staff.panCardUrl}
                  alt="PAN"
                  className="w-full rounded border"
                />
              </div>
            )}
            {staff.cancelCheque && (
              <div>
                <p className="font-semibold">Cancelled Cheque:</p>
                <img
                  src={staff.cancelCheque}
                  alt="Cheque"
                  className="w-full rounded border"
                />
              </div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ViewImagesModal;
