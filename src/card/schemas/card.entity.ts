import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Desk } from "src/desk/schemas/desk.entity";
import * as mongoose from 'mongoose';

@Schema({
    timestamps: true
})
export class Card {
    @Prop()
    id: number;

    @Prop()
    titleFrontCard: string;

    @Prop()
    contentFrontCard: string;

    @Prop()
    titleBackCard: string;

    @Prop()
    contentBackCard: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Desk' })
    deskId: Desk;
}
export const FrontCardSchema = SchemaFactory.createForClass(Card);