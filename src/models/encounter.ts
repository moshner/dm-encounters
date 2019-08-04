import EnemyType from './enemy';
import PartyMemberType from './party-member';

export interface EncounterType {
    id: string;
    name: string;
    enemies: EnemyType[];
    players: PartyMemberType[];
    round: number;
    current: number;
}

export default EncounterType;
