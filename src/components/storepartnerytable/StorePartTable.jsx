import {
  Avatar,
  Button,
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import React, { useEffect, useState } from "react";
import { FiZoomIn } from "react-icons/fi";
import PincodeModal from "./PincodeModal"; // Import your modal

//internal import

import Status from "@/components/table/Status";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import MainDrawer from "@/components/drawer/MainDrawer";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import Tooltip from "@/components/tooltip/Tooltip";
import StaffDrawer from "@/components/drawer/StaffDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import ActiveInActiveButton from "@/components/table/ActiveInActiveButton";
import AccessListModal from "@/components/modal/AccessListModal";
import AdminServices from "@/services/AdminServices";
import { toast } from "react-toastify";
import { notifyError, notifySuccess } from "@/utils/toast";
const StorePartTable = ({ staffs, lang }) => {
  const {
    title,
    serviceId,
    handleModalOpen,
    handleUpdate,
    isSubmitting,
    handleResetPassword,
  } = useToggleDrawer();
  console.log("staff", staffs);

  const { showDateFormat, showingTranslateValue } = useUtilsFunction();
  // State for access list modal
  const [staffList, setStaffList] = useState(staffs);

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [selectedStaffId, setSelectedStaffId] = useState(null);

  useEffect(() => {
    setStaffList(staffs);
  }, [staffs]);
  const openPincodeModal = (staffId) => {
    setSelectedStaffId(staffId);
    setIsPincodeModalOpen(true);
  };

  const closePincodeModal = () => {
    setSelectedStaffId(null);
    setIsPincodeModalOpen(false);
  };

  const handlePincodeConfirm = async (pincode) => {
    if (!selectedStaffId || !pincode) return;
    try {
      await AdminServices.addSecondaryPincode(selectedStaffId, pincode);
      notifySuccess("Pincode added successfully");
      // update pincode in frontend
      setStaffList((prevStaffList) =>
        prevStaffList.map((staff) =>
          staff._id === selectedStaffId
            ? {
                ...staff,
                additionalPincode: [
                  ...(staff.additionalPincode || []),
                  pincode,
                ],
              }
            : staff
        )
      );
      closePincodeModal();
    } catch (error) {
      console.log(error);
      notifyError(
        error?.response?.data?.message || "Failed to add secondary pincode"
      );
    }
    // You can now call an API or update local state
    // console.log("Confirmed pincode for", selectedStaffId, pincode);
    // Example: AdminServices.addSecondaryPincode(selectedStaffId, { pincode })
  };

  // Function to open the access list modal
  const handleAccessModalOpen = (staff) => {
    setSelectedStaff(staff);
    setIsAccessModalOpen(true);
  };

  // Function to close the access list modal
  const handleAccessModalClose = () => {
    setSelectedStaff(null);
    setIsAccessModalOpen(false);
  };
  const [staffStatus, setStaffStatus] = useState({});

  // Sync state with the latest `staffs` prop when it updates
  useEffect(() => {
    const initialStatus = staffs.reduce(
      (acc, staff) => ({ ...acc, [staff._id]: staff.status || "Hold" }),
      {}
    );
    setStaffStatus(initialStatus);
  }, [staffs]); // Re-run when `staffs` changes

  const handleStatusChange = async (event, id) => {
    const newStatus = event.target.value;

    // Optimistic UI update
    setStaffStatus((prev) => ({ ...prev, [id]: newStatus }));

    try {
      await AdminServices.updateStorePartnerStatus(id, { status: newStatus });
      toast.success("Status updated successfully");
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message);

      // Revert to previous state if update fails
      setStaffStatus((prev) => ({
        ...prev,
        [id]: staffs.find((staff) => staff._id === id)?.status || "Hold",
      }));
    }
  };

  return (
    <>
      <DeleteModal id={serviceId} title={title} />
      {/* Access List Modal */}
      {isAccessModalOpen && (
        <AccessListModal
          staff={selectedStaff}
          isOpen={isAccessModalOpen}
          onClose={handleAccessModalClose}
          showingTranslateValue={showingTranslateValue}
        />
      )}

      <MainDrawer>
        <StaffDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {staffList?.map((staff) => (
          <TableRow key={staff._id}>
            {/* <TableCell>
              <div className="flex items-center">
                <Avatar
                  className="hidden mr-3 md:block bg-gray-50"
                  src={staff.image}
                  alt="staff"
                />
                <div>
                  <h2 className="text-sm font-medium">
                    {showingTranslateValue(staff?.name)}
                  </h2>
                </div>
              </div>
            </TableCell> */}

            <TableCell>
              <span className="text-sm">{staff.name}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm ">{staff.email}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{staff.mobile}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{staff.city}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{staff.state}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{staff.pinCode}</span>
            </TableCell>
            <TableCell>
              <select
                className="px-2 py-1 rounded-md bg-white text-black"
                id=""
                disabled={staff?.additionalPincode?.length === 0}
                defaultValue={""}
              >
                <option value="" disabled>
                  {staff?.additionalPincode?.length > 0
                    ? "View Pincode's"
                    : "No Pincode"}
                </option>
                {staff?.additionalPincode?.map((pincode, index) => {
                  return (
                    <option key={index} value={pincode}>
                      {pincode}
                    </option>
                  );
                })}
              </select>
            </TableCell>
            <TableCell>
              <Button size="small" onClick={() => openPincodeModal(staff._id)}>
                Add Pincode
              </Button>
            </TableCell>

            <TableCell>
              <span className="text-sm ">{staff.pan}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">
                {staff?.aadhar ? staff?.aadhar : "No Aadhar"}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm ">{staff?.gst ?? 0}</span>
            </TableCell>
            <TableCell>
              <select
                className="px-2 py-1 rounded-md bg-white text-black"
                value={staffStatus[staff._id]}
                id=""
                onChange={(e) => {
                  handleStatusChange(e, staff._id);
                }}
              >
                <option value="Accepted">Active</option>
                <option value="Hold">Hold</option>
                <option value="Rejected">Rejected</option>
              </select>
            </TableCell>

            {/* <TableCell>
              <span className="text-sm">
                {showDateFormat(staff.joiningData)}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">{staff?.role}</span>
            </TableCell>
            <TableCell className="text-center text-xs">
              <Status status={staff.status} />
            </TableCell> */}

            {/* <TableCell className="text-center">
              <ActiveInActiveButton
                id={staff?._id}
                staff={staff}
                option="staff"
                status={staff.status}
              />
            </TableCell>

            <TableCell>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleAccessModalOpen(staff)}
                  className="text-gray-400"
                >
                  <Tooltip
                    id="view"
                    Icon={FiZoomIn}
                    title="View Access Route"
                    bgColor="#059669"
                  />
                </button>
                <EditDeleteButton
                  id={staff._id}
                  staff={staff}
                  isSubmitting={isSubmitting}
                  handleUpdate={handleUpdate}
                  handleModalOpen={handleModalOpen}
                  handleResetPassword={handleResetPassword}
                  title={showingTranslateValue(staff?.name)}
                />
              </div>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
      {isPincodeModalOpen && (
        <PincodeModal
          isOpen={isPincodeModalOpen}
          onClose={closePincodeModal}
          onConfirm={handlePincodeConfirm}
        />
      )}
    </>
  );
};

export default StorePartTable;
