import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Desk } from "src/desk/schemas/desk.entity";
import * as mongoose from 'mongoose';

@Schema()
export class Card {
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Desk' })
    deskId: Desk;
}
export const CardSchema = SchemaFactory.createForClass(Card);