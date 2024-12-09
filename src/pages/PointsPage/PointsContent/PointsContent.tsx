import { PointsAvailable } from "./PointsAvailable";
import { PointsCompleted } from "./PointsCompleted";
import { PointsLevel } from "./PointsLevel";

export const PointsContent = ({ active }) => {
    switch(active) {
        case 'level':
            return <PointsLevel />
        case 'available':
            return <PointsAvailable />
        case 'completed':
            return <PointsCompleted />
        default:
            return null;
    }
}