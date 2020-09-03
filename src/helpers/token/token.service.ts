import { Injectable } from "@nestjs/common";
import { Sequelize, QueryTypes } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class TokenValidationService {
    private sequelize = new Sequelize(process.env.SEQUELIZE_DATABASE, process.env.SEQUELIZE_USERNAME, process.env.SEQUELIZE_PASSWORD, {
        host: process.env.SEQUELIZE_HOST,
        port: 3306,
        dialect:'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
      });
	async validateToken(token: string){
       const user_id = token.split("==")[1];
       const origin = await this.sequelize.query(
        'select origen from seg_tokens where usuario_id = :user_id',
        {
          replacements: { user_id: user_id},
          type: QueryTypes.SELECT
        }
      );
       const code =  await this.sequelize.query(
            'select fn_validar_token(:user_id,:token,:origen,302,-1)',
            {
              replacements: { user_id: user_id, token: token, origen: Object.values(origin[0])[0]},
              type: QueryTypes.SELECT
            }
          );
        return Object.values(code[0])[0];
    }
}