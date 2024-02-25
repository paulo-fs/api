import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe<T> {
  transform(value: T, metadata: ArgumentMetadata) {
    if (value === undefined) {
      return Promise.resolve(value);
    }
    return super.transform(value, metadata);
  }
}
