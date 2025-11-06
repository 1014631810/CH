import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Auth() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-[32px] font-semibold tracking-tight text-black">App Name</h1>
        </div>

        <div className="flex flex-col items-center gap-6 pt-32">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-semibold text-black">Create an account</h2>
            <p className="text-base text-black">Enter your email to sign up for this app</p>
          </div>

          <div className="w-full space-y-4">
            <input
              type="email"
              placeholder="email@domain.com"
              className="w-full h-10 px-4 border border-[#E0E0E0] rounded-lg text-xl font-medium text-[#828282] placeholder:text-[#828282] bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />

            <Button className="w-full h-10 bg-black hover:bg-black/90 text-white rounded-lg">
              Sign up with email
            </Button>

            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-[#E6E6E6]" />
              <span className="text-base text-[#828282]">or continue with</span>
              <div className="flex-1 h-px bg-[#E6E6E6]" />
            </div>

            <Button
              variant="secondary"
              className="w-full h-10 bg-[#EEE] hover:bg-[#E0E0E0] text-black rounded-lg flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.9895 10.1878C19.9895 9.36841 19.9214 8.77047 19.7742 8.15039H10.1992V11.8487H15.8195C15.7062 12.7678 15.0943 14.1519 13.7346 15.082L16.9527 17.5181C18.8789 15.7796 19.9895 13.2218 19.9895 10.1878Z" fill="#4285F4"/>
                <path d="M10.1993 19.9322C12.9527 19.9322 15.2643 19.0463 16.9527 17.5183L13.7346 15.0822C12.8734 15.669 11.7176 16.0787 10.1993 16.0787C7.50242 16.0787 5.21352 14.3403 4.39759 11.9375L1.08887 14.4399C2.76588 17.6954 6.2106 19.9322 10.1993 19.9322Z" fill="#34A853"/>
                <path d="M4.39748 11.9363C4.18219 11.3163 4.05759 10.6518 4.05759 9.96534C4.05759 9.27878 4.18219 8.61443 4.38615 7.99435L1.08876 5.49183C0.397576 6.84275 0.000976562 8.35977 0.000976562 9.96534C0.000976562 11.5709 0.397576 13.0879 1.08876 14.4388L4.39748 11.9363Z" fill="#FBBC05"/>
                <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33718L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335"/>
              </svg>
              Google
            </Button>

            <p className="text-center text-base leading-normal">
              <span className="text-[#828282]">By clicking continue, you agree to our </span>
              <span className="text-black">Terms of Service</span>
              <span className="text-[#828282]"> and </span>
              <span className="text-black">Privacy Policy</span>
            </p>
          </div>
        </div>

        <div className="pt-8 text-center">
          <Link to="/" className="text-sm text-[#828282] hover:text-black">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
