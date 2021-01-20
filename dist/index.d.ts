declare type ExtractPropertyNamesOfType<T, S>
    = { [K in keyof T]: T[K] extends S ? K : never }[keyof T];

declare type ExcludePropertyNamesOfType<T, S>
    = { [K in keyof T]: T[K] extends S ? never : K }[keyof T];

declare type ExtractPropertiesOfType<T, S>
    = Pick<T, ExtractPropertyNamesOfType<T, S>>;

declare type ExcludePropertiesOfType<T, S>
    = Pick<T, ExcludePropertyNamesOfType<T, S>>;

export declare type HalLink = {
    href: string;
}

export declare type RepresentationModel<T extends Record<string, any> = Record<string, any>> = {
    _links: {
        self: HalLink
    } & ExtractPropertiesOfType<T, HalLink>
}

export declare type EntityModel<T extends Record<string, any> = Record<string, any>> = {

} & ExcludePropertiesOfType<T, HalLink> & RepresentationModel<T>

// typeof & instanceof not supported for custom type.
// extract EntityModel<T>[] using "_embedded.{pluralized}"
export declare type CollectionModel<T extends Record<string, any> = Record<string, any>> = {
    _embedded: Record<string, EntityModel<T>[]>
    "_links": {
        self: HalLink;
        profile: HalLink;
        search: HalLink;
    }
}

export declare type PagedModel<T extends Record<string, any> = Record<string, any>> = {
    _embedded: Record<string, EntityModel<T>[]>
    "_links": {
        "first": HalLink
        "self": HalLink
        "next": HalLink
        "last": HalLink
    }
    "page": {
        "size": number,
        "totalElements": number,
        "totalPages": number,
        "number": number
    }
}

export {};