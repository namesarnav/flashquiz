import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-8">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center mr-2">
                <span className="font-bold text-sm">EX</span>
              </div>
              <span className="font-semibold text-xl tracking-tight">ExamPrep</span>
            </Link>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              Log in to your account
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Welcome back! Please enter your details.
            </p>
          </div>
          
          <LoginForm />
        </div>
      </div>
      
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="flex h-full items-center justify-center p-12">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                "ExamPrep helped me increase my GPA by 0.8 points in just one semester!"
              </h3>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="font-medium text-white">A</span>
                </div>
                <div>
                  <p className="font-medium text-white">Aiden Chen</p>
                  <p className="text-sm text-white/80">Biology Student, UCLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}