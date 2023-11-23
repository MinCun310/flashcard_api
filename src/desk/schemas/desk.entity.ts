import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Card } from "src/card/schemas/card.entity";

@Schema({
    timestamps: true
})
export class Desk {
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'FrontCard' })
    card?: Card[];
}
export const DeskSchema = SchemaFactory.createForClass(Desk);