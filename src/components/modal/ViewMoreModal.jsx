import React from "react";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

const ViewMore = ({ staff, onClose }) => {
  console.log("staff", staff);

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
          {/* Text Information */}
          <div className="space-y-2">
            <div>
              <p className="font-semibold ">About Product:</p>
              <p className="text-gray-800 dark:text-gray-200 p-2 rounded bg-gray-50 dark:bg-gray-800">
                {staff.aboutProduct}
              </p>
            </div>
            <div>
              <p className="font-semibold">Bank Account Number:</p>
              <p>{staff.bankAccNumber}</p>
            </div>
            <div>
              <p className="font-semibold">IFSC Code:</p>
              <p>{staff.IFSC}</p>
            </div>
            <div>
              <p className="font-semibold">Account Holder Name:</p>
              <p>{staff.accountHolderName}</p>
            </div>
            <div>
              <p className="font-semibold">Bank Branch:</p>
              <p>{staff.bankBranch}</p>
            </div>
            <div>
              <p className="font-semibold">GST Number:</p>
              <p>{staff.GSTNumber}</p>
            </div>
            <div>
              <p className="font-semibold">Address:</p>
              <p>{staff.address}</p>
            </div>
            <div>
              <p className="font-semibold">Pincode:</p>
              <p>{staff.pincode}</p>
            </div>
            <div>
              <p className="font-semibold">Aadhar Number:</p>
              <p>{staff.aadharNumber}</p>
            </div>
            <div>
              <p className="font-semibold">PAN Number:</p>
              <p>{staff.panNumber}</p>
            </div>
            <div>
              <p className="font-semibold">Status:</p>
              <p>{staff.status}</p>
            </div>
          </div>
          {/* Images */}
          <div className="text-3xl underline font-bold text-center  ">
            Images
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
            {staff.cancelChequeUrl && (
              <div>
                <p className="font-semibold">Cancelled Cheque:</p>
                <img
                  src={staff.cancelChequeUrl}
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

export default ViewMore;
