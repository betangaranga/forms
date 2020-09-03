import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as moment from 'moment-timezone';
@Schema()
export class Form extends Document {

    @Prop({default: moment().tz('America/Mexico_City').format('DD/MM/YYYY HH:mm')})
    created_at: string;
    @Prop()
    _id: number;
    @Prop({default: moment().tz('America/Mexico_City').format('DD/MM/YYYY HH:mm')})
    updated_at: string;
    @Prop({ required: true })
    title: string;
    @Prop()
    enterprise_id: number;
    @Prop()
    status: boolean;
    @Prop()
    creation_user: number;
    @Prop()
    update_user: number;
    @Prop()
    active: boolean;
    @Prop()
    visible: boolean;
    @Prop()
    of_system: boolean;
    @Prop()
    questions: {};   
}

export const FormCreationSchema = SchemaFactory.createForClass(Form);

