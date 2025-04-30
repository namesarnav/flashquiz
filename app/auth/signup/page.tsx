import Link from "next/link";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
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
              Create your account
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Start your journey to better exam preparation!
            </p>
          </div>
          
          <SignupForm />
        </div>
      </div>
      
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-violet-500 to-purple-600">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="flex h-full items-center justify-center p-12">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Join thousands of students who are preparing smarter, not harder.
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-white">
                  <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Generate questions from your own notes</span>
                </li>
                <li className="flex items-center text-white">
                  <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Take quizzes anytime, anywhere</span>
                </li>
                <li className="flex items-center text-white">
                  <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Track your progress over time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}