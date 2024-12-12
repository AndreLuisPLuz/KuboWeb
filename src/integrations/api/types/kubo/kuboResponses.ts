import { CosmeticDto } from "../cosmetics/cosmeticResponses";

type KuboDto = {
    id: string;
    nickname: string;
    color: string;
    health: number;
    hunger: number;
    happiness: number;
    hat: Omit<CosmeticDto, "name" | "type">;
    eyes: Omit<CosmeticDto, "name" | "type">;
};

export type { KuboDto };