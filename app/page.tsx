import LoginButton from "@/components/auth/LoginButton";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">

      <Box className="space-y-6">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">🔐Auth</h1>
        <p className="text-lg text-white">This is a simple authentication example using Next.js</p>
      </Box>
<LoginButton>
       <Button variant="secondary" size="lg">Sign in</Button>       
</LoginButton>
    </main>
  );
}
