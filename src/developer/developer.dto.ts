export class AppCreateDto {
  name: string;
  description: string;
  metadata: string;
}

export class AppUpdateDto {
  name?: string;
  description?: string;
  metadata?: string;
  contract?: string;
}
