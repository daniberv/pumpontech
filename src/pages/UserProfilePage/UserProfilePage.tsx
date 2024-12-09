import { UserLinks } from "@/components/UserLinks"
import { UserPage } from "@/components/UserPage"
import { UserProfile } from "./UserProfile"

export const UserProfilePage = () => {
    return (
        <UserPage back={true}>
            <UserLinks />
            <UserProfile />
        </UserPage>
    )
}