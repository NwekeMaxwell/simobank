import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })

  if(!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  const account = await getAccount({ appwriteItemId });
  // const loggedIn = {
  //   $id: "1234456578",
  //   email: "example@gmail.com",
  //   userId: "asdasdasd",
  //   dwollaCustomerUrl: "string",
  //   dwollaCustomerId: "stringid",
  //   firstName: "John",
  //   lastName: "Doe",
  //   name: "John Doe",
  //   address1: "Doe street",
  //   city: "Joe city",
  //   state: "Jon state",
  //   postalCode: "12343",
  //   dateOfBirth: "11/12/1222",
  //   ssn: "12345",
  // };
  // const accounts = {
  //   data: [
  //     {
  //       id: "string",
  //       availableBalance: 23345,
  //       currentBalance: 2324,
  //       officialName: "string",
  //       mask: "string",
  //       institutionId: "string",
  //       name: "string",
  //       type: "string",
  //       subtype: "string",
  //       appwriteItemId: "string",
  //       shareableId: "string",
  //     },
  //   ],
  //   totalBanks: 1,
  //   totalCurrentBalance: 9009099,
  // };

  // const accountsData: any = [
  //   {
  //     id: "string",
  //     availableBalance: 23345,
  //     currentBalance: 2324,
  //     officialName: "string",
  //     mask: "string",
  //     institutionId: "string",
  //     name: "string",
  //     type: "string",
  //     subtype: "string",
  //     appwriteItemId: "string",
  //     shareableId: "string",
  //     transactions: [],
  //   },
  // ];

  // const account = {
  //   id: "string",
  //   availableBalance: 23345,
  //   currentBalance: 2324,
  //   officialName: "string",
  //   mask: "string",
  //   institutionId: "string",
  //   name: "string",
  //   type: "string",
  //   subtype: "string",
  //   appwriteItemId: "string",
  //   shareableId: "string",
  //   transactions: [],
  // };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>

        <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home;
