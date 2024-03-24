import React, { useState } from "react";

interface ListCardProps {
  listHeading: string;
  listData: string[];
  emailrequired?: boolean;
  amountRequired?: boolean;
}

function ListCard({
  listHeading,
  emailrequired,
  amountRequired,
  listData,
}: ListCardProps) {
  const [needEmail, setNeedEmail] = useState(emailrequired);
  const [needAmount, setNeedAmount] = useState(amountRequired);

  return (
    <>
      <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="truncate text-xl font-bold leading-none text-gray-900 dark:text-white">
            {listHeading}
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {listData?.map((ele) => {
              return (
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {ele}{" "}
                      </p>
                      {needEmail && (
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      )}
                    </div>

                    {needAmount && (
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListCard;
