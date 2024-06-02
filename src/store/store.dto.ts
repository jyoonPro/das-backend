export class LicenseCreateDto {
    user: string;
    name: string;
    contract: string;
    tokenId: string;
    isResell: boolean;
}

export class LicenseUpdateDto {
    isResell: boolean;
}

export class ResellCreateDto {
    from: string;
    to: string;
    contract: string;
    tokenId: string;
    price: number;
}
  