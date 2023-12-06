import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../common/modalSlice";
import TitleCard from "../../components/Cards/TitleCard";
import { RECENT_TRANSACTIONS } from "../../utils/dummyData";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
function Transactions() {
  const dispatch = useDispatch();
  const viewDetail = (index) => {
    dispatch(
      openModal({
          title: "Transaction Detail",
          index
      })
    );
  };

  const [trans, setTrans] = useState(RECENT_TRANSACTIONS);

  return (
    <>
      <TitleCard title="Transactions" topMargin="mt-2">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>From</th>
                <th>To</th>
                <th>Account</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {trans.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">
                            {moment(l.date).format("D MMM YYYY")}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{l.to}</td>
                    <td>{l.from}</td>
                    <td>{l.account}</td>
                    <td>${l.amount}</td>
                    <td>{l.paymentMethod}</td>
                    <td>
                      <button
                        className="btn btn-square btn-ghost"
                        onClick={() => viewDetail(k)}
                      >
                        <EyeIcon className="w-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default Transactions;
