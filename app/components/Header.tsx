import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 w-full">
      <Image
        src="/assets/logo.png"
        alt="FSW Barber"
        width={120}
        height={18}
        priority
      />

      <Button size="icon" variant="outline">
        <MenuIcon size={18} />
      </Button>
    </header>
  )
}

export default Header