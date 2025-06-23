import { TableBody, TableCell, TableRow } from "@windmill/react-ui";

import { useTranslation } from "react-i18next";
import { FiZoomIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

//internal import

import Status from "@/components/table/Status";
import Tooltip from "@/components/tooltip/Tooltip";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import PrintReceipt from "@/components/form/others/PrintReceipt";
import SelectStatus from "@/components/form/selectOption/SelectStatus";
import { useState } from "react";
import OrderByModal from "../orderedby/OrderByModal";

const OrderTable = ({ orders }) => {
  // console.log('globalSetting',globalSetting)
  const { t } = useTranslation();
  const { showDateTimeFormat, currency, getNumberTwo } = useUtilsFunction();
const [showModal, setShowModal] = useState(false);
const [selectedOrderId, setSelectedOrderId] = useState(null);

const handleViewClick = (orderId) => {
  setSelectedOrderId(orderId);
  setShowModal(true);
};

const handleCloseModal = () => {
  setShowModal(false);
  setSelectedOrderId(null);
};
  // console.log("orders", orders);

  return (
    <>
      <TableBody className="dark:bg-gray-900">
        {orders?.map((order, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              {/* {console.log("orderedby", order?.orderedBy?.name ?? "N/A")} */}
              <span className="font-semibold uppercase text-xs">
                {order?.invoice}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {showDateTimeFormat(order?.updatedDate)}
              </span>
            </TableCell>

            <TableCell className="text-xs">
              <span className="text-sm">{order?.user_info?.name}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                {order?.paymentMethod}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                {currency}
                {getNumberTwo(order?.total)}
              </span>
            </TableCell>

            <TableCell className="text-xs">
              <Status status={order?.status} />
            </TableCell>

            {/* <TableCell className="text-xs">
              <span className="text-sm">
                {order?.orderedBy?.contact ?? "N/A"}
              </span>
            </TableCell>
            <TableCell className="text-xs">
              <span className="text-sm">
     
                {order?.orderedBy?.email ?? "N/A"}
              </span>
            </TableCell>
            <TableCell className="text-xs">
           
              <span className="text-sm">{order?.orderedBy?.name ?? "N/A"}</span>
            </TableCell>
            <TableCell className="text-xs">
              <span className="text-sm">{order?.orderedBy?.role ?? "N/A"}</span>{" "}
            </TableCell> */}

            <TableCell className="text-center">
              <SelectStatus id={order._id} order={order} />
            </TableCell>

            {/* <TableCell className="text-right flex ">
              <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                <Link
                  className="flex flex-nowrap gap-1"
                  to={`/orderedby/${order._id}`}
                >
                  View{" "}
                  <Tooltip
                    id="view"
                    Icon={FaEye}
                    title={"View Details"}
                    bgColor="#059669"
                  />
                </Link>
              </span>
            </TableCell> */}
            <TableCell className="text-gray-500 hover:text-emerald-600">
              <span
                className="flex flex-nowrap gap-1 items-center justify-center cursor-pointer"
                onClick={() => handleViewClick(order._id)}
              >
                View <FaEye />
              </span>
            </TableCell>
            <TableCell className="text-right flex justify-end">
              <div className="flex justify-between items-center">
                <PrintReceipt orderId={order._id} />

                <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                  <Link to={`/order/${order._id}`}>
                    <Tooltip
                      id="view"
                      Icon={FiZoomIn}
                      title={t("ViewInvoice")}
                      bgColor="#059669"
                    />
                  </Link>
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <OrderByModal
        isOpen={showModal}
        orderId={selectedOrderId}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default OrderTable;
