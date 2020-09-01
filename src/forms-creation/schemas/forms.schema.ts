import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Form extends Document {

    @Prop()
    created_at: Date;
    @Prop()
    id: number;
    @Prop()
    updated_at: Date;
    @Prop({ required: true })
    title: string;
    @Prop()
    enterprise_id: number;
    @Prop()
    status: boolean;
    @Prop({ required: true })
    creation_user: string;
    @Prop()
    update_user: string;
    @Prop()
    active: boolean;
    @Prop()
    visible: boolean;
    @Prop()
    of_system: boolean;
    @Prop()
    questions: {};   
}

export const FormSchema = SchemaFactory.createForClass(Form);

