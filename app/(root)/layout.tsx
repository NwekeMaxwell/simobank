import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
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

  if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
