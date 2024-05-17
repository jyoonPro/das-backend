export class AppCreateDto {
  name: string;
  description: string;
  developer: string;
}

export class AppUpdateDto {
  name?: string;
  description?: string;
  metadata?: string;
}
