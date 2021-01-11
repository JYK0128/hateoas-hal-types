# Typescript types for HAL in HATEOAS
This repository exports a set of typescript types for HAL in HATEOAS.

It exports the following Types:

|Type|Description|
|----|-----------|
|HalLink|href string|
|RepresentationModel|HalLinks|
|EntityModel|Properties + Rel Links|
|CollectionModel|Collection + MetaData Links|
|PagedModel|Collection Model + PageInfo|

## Example
````
type Foo = {
    A:string
    B:HalLink
}

// Helper to build HalModel
const test: EntityModel<Foo> = {
    A:"abc",
    _links:{
     self: {href: "https://self.self"}
        B: {href: "https://test.test"}
    }
}

// Helper to access HalModel
console.log(test.A)
console.log(test._links.B.href)
````