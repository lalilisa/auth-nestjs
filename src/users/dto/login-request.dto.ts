import { ApiProperty } from "@nestjs/swagger";


export class LoginRequest{

    @ApiProperty({example:"john"})
    username:string

    @ApiProperty({example:"changeme"})
    password:string
}