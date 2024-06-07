import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
// import { getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {
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
  // if(!accounts) return;
  
  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  )
}

export default Transfer