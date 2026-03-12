
import { Card, CardContent } from "@shadcn/ui"
import Image from "next/image"; 


const Header = () => {
    return (
        <Card>
            <CardContent>

                <Image src="/assets/logo.png" alt="Logo" width={18} height={120} />
                </CardContent>
        </Card>
    );
}
 
export default Header;