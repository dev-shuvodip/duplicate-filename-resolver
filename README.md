# duplicate-filename-resolver
This package matches a file name of type `string` against an Array of objects of type `File` or `IFileNameCollection` and return a unique file name of type `string`.

## Install
`npm i duplicate-filename-resolver --save`

## Exports
 * `IFileNameCollection` - Represents an Object containing file name.
 
 ```
{    
    name: string;
}
```
* `getUniqueFileName(allFiles: File[] | IFileNameCollection[], newFileName: string)` - Iterates through passed array `allFiles` of type `File[] | IFileNameCollection[]` matching passed `newFileName` of type `string`. If duplicate is found, return a new unique file name. Else, returns same name.

## Usage

Import the package.
```
import { getUniqueFileName, IFileNameCollection } from "duplicate-filename-resolver";
```

Declare a variable `allFiles` of type `IFileNameCollection`. A array of type `File[]` can also be passed when dealing with file upload control.
```
var allFiles: IFileNameCollection[] = [{
  name: "file.txt"
}];
```
> `allFiles` is a array of type `IFileNameCollection[]`.

Call method `getUniqueFileName(allFiles: File[] | IFileNameCollection[], newFileName: string)` and pass `alFiles` array and a `string` file name.
```
var fileName string = getUniqueFileName(this.allFiles, "file.txt");
```
> Output - "file (1).txt"

## Examples
*
```
var allFiles: IFileNameCollection[] = [{
  name: "file (1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file (1).txt");
```
> Output - "file (2).txt"

*
```
var allFiles: IFileNameCollection[] = [{
  name: "file (1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file(1).txt");
```
> Output - "file(1).txt"

*
```
var allFiles: IFileNameCollection[] = [{
  name: "file(1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file(1).txt");
```
> Output - "file(1) (1).txt"

*
```
var allFiles: IFileNameCollection[] = [{
  name: "file.(1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file.(1).txt");
```
> Output - "file.(1) (1).txt"

*
```
var allFiles: IFileNameCollection[] = [{
  name: "file (1)(2).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file (1)(2).txt");
```
> Output - "file (1)(2) (1).txt"



