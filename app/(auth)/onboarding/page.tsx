"use server"
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import AccountProfile from "@/components/shared/AccountProfile";
import { fetchStudent } from "@/lib/actions/student.action";

const page = async () => {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchStudent(user.id);
  if (userInfo?.onboarded) redirect("/dashboard");

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.fullName ?? "",
    GradeLevel: userInfo?.gradeLevel,
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-6xl p-8">
      {/* Left Side - Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="/login.svg" // Replace with your image URL
          alt="Onboarding Illustration"
          className="w-full h-auto max-w-md mx-auto"
        />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
        <h1 className="head-text">Onboarding</h1>
        <p className="mt-3 text-base-regular text-light-2">
          Complete your profile now, to use AI mazing.
        </p>

        <section className="mt-9 bg-dark-2 p-10">
          <AccountProfile user={userData} btnTitle="Continue" />
        </section>
      </div>
    </div>
  );
};

export default page;
