import { AdvType } from "../../../dto";

export type AdvStoreType = {
    value: AdvType[];
    status: "idle" | "loading" | "failed";
};
