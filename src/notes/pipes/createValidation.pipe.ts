import { Injectable, ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CreateValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    console.log(metadata);
    const object = plainToClass(metadata.metatype, value);
    const errors = await validate(object);
    console.log(object);
    console.log(errors.toString());
    return value;
  }
}
