import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "@windmill/react-ui";

const ViewQueryMessage = ({
  isOpen,
  onClose,
  staff,
  showingTranslateValue,
}) => {
  // console.log("message ->",staff)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="text-xl font-medium text-center pb-6 dark:text-gray-300">
        Message From {staff?.name || staff?.fullName }
        {/* <span className="text-emerald-600">
          {showingTranslateValue(staff?.name)}
        </span> */}
      </h1>
      <ModalBody>
        {staff ? (
          <div className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200 p-2 rounded bg-gray-50 dark:bg-gray-800">
            {staff.message}
          </div>
        ) : (
          <p className="text-orange-500 py-10 text-lg text-center">
            No Message found
          </p>
        )}
      </ModalBody>

      <ModalFooter className="justify-end">
        <Button
          className="w-full sm:w-auto bg-red-400 text-white hover:bg-red-500"
          layout="delete"
          onClick={onClose}
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViewQueryMessage;
