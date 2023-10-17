import { SignUp } from "@clerk/nextjs";

const SignupPage = () => {
  return (
    <SignUp afterSignUpUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL} />
  );
};

export default SignupPage;
