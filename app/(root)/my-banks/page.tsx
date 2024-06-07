import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
// import { getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from "react";

const MyBanks = async () => {
  // const loggedIn = await getLoggedInUser();
  // const accounts = await getAccounts({
  //   userId: loggedIn.$id
  // })
  const loggedIn = {
    $id: "1234456578",
    email: "example@gmail.com",
    userId: "asdasdasd",
    dwollaCustomerUrl: "string",
    dwollaCustomerId: "stringid",
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    address1: "Doe street",
    city: "Joe city",
    state: "Jon state",
    postalCode: "12343",
    dateOfBirth: "11/12/1222",
    ssn: "12345",
  };
  const accounts = {
    id: "fawefd",
    data: [
      {
        id: "string",
        availableBalance: 23345,
        currentBalance: 2324,
        officialName: "string",
        mask: "string",
        institutionId: "string",
        name: "string",
        type: "string",
        subtype: "string",
        appwriteItemId: "string",
        shareableId: "string",
      },
    ],
    totalBanks: 1,
    totalCurrentBalance: 9009099,
  };
  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts.data.map((a: Account) => (
                <BankCard
                  key={accounts.id}
                  account={a}
                  userName={loggedIn?.firstName}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
