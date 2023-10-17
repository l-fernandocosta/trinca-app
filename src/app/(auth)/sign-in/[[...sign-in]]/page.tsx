import { SignIn } from "@clerk/nextjs";

const SigninPage = () => {
  return (
    <SignIn afterSignInUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL} redirectUrl={"/home"} />
  );
};

export default SigninPage;
