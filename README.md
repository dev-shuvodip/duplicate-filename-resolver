# duplicate-filename-resolver

[![npm version](https://badge.fury.io/js/duplicate-filename-resolver.svg)](https://badge.fury.io/js/duplicate-filename-resolver)
![NPM Downloads](https://img.shields.io/npm/dm/duplicate-filename-resolver)


This package matches a file name of type `string` against an Array of objects of type `IFileName` and return a unique file name of type `string`.

[See it in action ⚡️](https://stackblitz.com/edit/stackblitz-starters-6vmtw3)

## Install

`npm i duplicate-filename-resolver --save`

## Exports

- `IFileName` - Represents an Object containing file name.

```
{
   name: string;
}
```

- `getUniqueFileName(allFiles: IFileName[], newFileName: string)` - Iterates through passed array `allFiles` of type `IFileName[]` matching passed `newFileName` of type `string`. If duplicate is found, return a new unique file name. Else, returns same name.

## Usage

Import the package.

```
import { getUniqueFileName, IFileName } from "duplicate-filename-resolver";
```

Declare a variable `allFiles` of type `IFileName`.

```
var allFiles: IFileName[] = [{
  name: "file.txt"
}];
```

> `allFiles` is a array of type `IFileName[]`.

Call method `getUniqueFileName(allFiles: IFileName[], newFileName: string)` and pass `alFiles` array and a `string` file name.

```
var fileName string = getUniqueFileName(this.allFiles, "file.txt");
```

> Output - "file (1).txt"

## Examples

-

```
var allFiles: IFileName[] = [{
  name: "file (1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file (1).txt");
```

> Output - "file (2).txt"

-

```
var allFiles: IFileName[] = [{
  name: "file (1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file(1).txt");
```

> Output - "file(1).txt"

-

```
var allFiles: IFileName[] = [{
  name: "file(1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file(1).txt");
```

> Output - "file(1) (1).txt"

-

```
var allFiles: IFileName[] = [{
  name: "file.(1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file.(1).txt");
```

> Output - "file.(1) (1).txt"

-

```
var allFiles: IFileName[] = [{
  name: "file (1)(2).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file (1)(2).txt");
```

> Output - "file (1)(2) (1).txt"
