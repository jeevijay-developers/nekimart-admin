import { TableBody, TableCell, TableRow } from "@windmill/react-ui";
import React, { useState } from "react";
import { FiZoomIn } from "react-icons/fi";

import ViewImagesModal from "@/components/modal/ViewImagesModal"; // you will create this
import useUtilsFunction from "@/hooks/useUtilsFunction";

const VendorDetailsTable = ({ staffs }) => {
  const { showDateFormat } = useUtilsFunction();

  const [selectedImages, setSelectedImages] = useState(null);

  const handleViewImages = (staff) => {
    setSelectedImages(staff);
  };

  const handleCloseModal = () => {
    setSelectedImages(null);
  };

  return (
    <>
      {selectedImages && (
        <ViewImagesModal staff={selectedImages} onClose={handleCloseModal} />
      )}

      <TableBody>
        {staffs?.map((staff) => (
          <TableRow key={staff._id}>
            <TableCell>{staff.name}</TableCell>
            <TableCell>{staff.email}</TableCell>
            <TableCell>{staff.mobile}</TableCell>
            <TableCell>{staff.brandName}</TableCell>
            <TableCell>{showDateFormat(staff.submittedAt)}</TableCell>
            <TableCell>
              <button
                onClick={() => handleViewImages(staff)}
                className="text-emerald-600 hover:text-emerald-800 flex items-center gap-1"
              >
                <FiZoomIn />
                View More
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default VendorDetailsTable;
