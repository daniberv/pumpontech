import { CapJettons } from "./CapJettons";
import { DefaultJettons } from "./DefaultJettons";
import { GainersJettons } from "./GainersJettons";

export const FeedJettons = ({ filter }) => {
    switch (filter) {
        case 'default':
            return <DefaultJettons />
        case 'gainers':
            return <GainersJettons />
        case 'cap':
            return <CapJettons />
        default:
            return null;
    }
}