import { Schema } from "mongoose";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 50 },
        biome: { type: String, required: true, maxLength: 50 },
        atmosphere: { type: String, required: true, maxLength: 50 },
        galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },
    {
        timestamps: true, toJSON: { virtuals: true }
    }
)