import { ArgumentMetadata, ParseUUIDPipe } from '@nestjs/common';

export class OptionalParseUUIDPipe extends ParseUUIDPipe {
  transform(value: string, metadata: ArgumentMetadata): Promise<string> {
    if (!value) {
      return Promise.resolve(value);
    }
    return super.transform(value, metadata);
  }
}
