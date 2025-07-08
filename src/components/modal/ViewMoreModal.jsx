import React from "react";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

const ViewMore = ({ staff, onClose }) => {
  console.log("staff", staff);

  return (
    <Dialog open={!!staff} onClose={onClose} className="relative z-50">
      {/* Backdrop with blur effect */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex justify-between items-center text-white">
            <Dialog.Title className="text-2xl font-bold">
              📄 View Documents
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200"
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Personal Information Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-500 text-white p-2 rounded-lg mr-3">
                  ℹ️
                </span>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                  <p className="font-semibold text-gray-700 mb-2">
                    Aadhar Number:
                  </p>
                  <p className="text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded">
                    {staff?.aadharNumber || "Not provided"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                  <p className="font-semibold text-gray-700 mb-2">
                    PAN Number:
                  </p>
                  <p className="text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded">
                    {staff?.panNumber || "Not provided"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200 md:col-span-2">
                  <p className="font-semibold text-gray-700 mb-2">Address:</p>
                  <p className="text-gray-600">
                    {staff?.address || "Not provided"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                  <p className="font-semibold text-gray-700 mb-2">Pincode:</p>
                  <p className="text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded">
                    {staff?.pincode || "Not provided"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                  <p className="font-semibold text-gray-700 mb-2">Status:</p>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      staff?.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : staff?.status === "Inactive"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {staff?.status || "Not provided"}
                  </span>
                </div>
              </div>
            </div>

            {/* Business Information Section */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-green-500 text-white p-2 rounded-lg mr-3">
                  🏢
                </span>
                Business Information
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
                  <p className="font-semibold text-gray-700 mb-2">
                    About Product:
                  </p>
                  <p className="text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg">
                    {staff?.aboutProduct || "Not provided"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
                  <p className="font-semibold text-gray-700 mb-2">
                    GST Number:
                  </p>
                  <p className="text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded">
                    {staff?.GSTNumber || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            {/* Banking Information Section */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-500 text-white p-2 rounded-lg mr-3">
                  🏦
                </span>
                Banking Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200">
                  <p className="font-semibold text-gray-700 mb-2">
                    Account Holder Name:
                  </p>
                  <p className="text-gray-600">
                    {staff?.accountHolderName || "Not provided"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200">
                  <p className="font-semibold text-gray-700 mb-2">
                    Bank Account Number:
                  </p>
                  <p className="text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded">
                    {staff?.bankAccNumber || "Not provided"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200">
                  <p className="font-semibold text-gray-700 mb-2">IFSC Code:</p>
                  <p className="text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded">
                    {staff?.IFSC || "Not provided"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200">
                  <p className="font-semibold text-gray-700 mb-2">
                    Bank Branch:
                  </p>
                  <p className="text-gray-600">
                    {staff?.bankBranch || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-orange-500 text-white p-2 rounded-lg mr-3">
                  📸
                </span>
                Document Images
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {staff?.logoUrl && (
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
                    <p className="font-semibold text-gray-700 mb-3">Logo:</p>
                    <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-colors">
                      <img
                        src={staff.logoUrl}
                        alt="Logo"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}
                {staff?.aadharCardUrl && (
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
                    <p className="font-semibold text-gray-700 mb-3">
                      Aadhar Card:
                    </p>
                    <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-colors">
                      <img
                        src={staff.aadharCardUrl}
                        alt="Aadhar"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}
                {staff?.panCardUrl && (
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
                    <p className="font-semibold text-gray-700 mb-3">
                      PAN Card:
                    </p>
                    <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-colors">
                      <img
                        src={staff.panCardUrl}
                        alt="PAN"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}
                {staff?.cancelChequeUrl && (
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
                    <p className="font-semibold text-gray-700 mb-3">
                      Cancelled Cheque:
                    </p>
                    <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-colors">
                      <img
                        src={staff.cancelChequeUrl}
                        alt="Cheque"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ViewMore;
