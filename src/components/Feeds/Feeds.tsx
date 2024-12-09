import { Feed } from "./Feed"
import { Tags } from "./Tags";

export const Feeds = ({ mode }) => {
    switch (mode) {
        case "feed":
            return <Feed />
        case "tags":
            return <Tags />
        default:
            return null;
    }
}