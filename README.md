# duplicate-filename-resolver

[![npm version](https://badge.fury.io/js/duplicate-filename-resolver.svg)](https://badge.fury.io/js/duplicate-filename-resolver)
![NPM Downloads](https://img.shields.io/npm/dm/duplicate-filename-resolver)

This package matches a file name of type `string` against an Array of objects of type `IFile` and return a unique file name of type `string`.

[See it in action ⚡️](https://stackblitz.com/edit/stackblitz-starters-6vmtw3)

## Changelog

[Learn about the latest improvements][changelog].

## Install

`npm i duplicate-filename-resolver --save`

## Exports

- `IFile` - Represents an Object containing file name of type `string` and the file object of type `File`.

```
{
   name: string;
   file: File;
}
```

- `getUniqueFileName(allFiles: IFile[], newFileName: string)` - Iterates through passed array `allFiles` of type `IFile[]` matching passed `newFileName` of type `string`. If duplicate is found, return a new unique file name. Else, returns same name.

## Usage

Import the package.

```
import { getUniqueFileName, IFile } from "duplicate-filename-resolver";
```

Declare a variable `allFiles` of type `IFile`.

```
var allFiles: IFile[] = [{
  name: "file.txt"
}];
```

> `allFiles` is a array of type `IFile[]`.

Call method `getUniqueFileName(allFiles: IFile[], newFileName: string)` and pass `alFiles` array and a `string` file name.

```
var fileName string = getUniqueFileName(this.allFiles, "file.txt");
```

> Output - "file (1).txt"

## Examples

-

```
var allFiles: IFile[] = [{
  name: "file (1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file (1).txt");
```

> Output - "file (2).txt"

-

```
var allFiles: IFile[] = [{
  name: "file (1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file(1).txt");
```

> Output - "file(1).txt"

-

```
var allFiles: IFile[] = [{
  name: "file(1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file(1).txt");
```

> Output - "file(1) (1).txt"

-

```
var allFiles: IFile[] = [{
  name: "file.(1).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file.(1).txt");
```

> Output - "file.(1) (1).txt"

-

```
var allFiles: IFile[] = [{
  name: "file (1)(2).txt"
}];
var fileName string = getUniqueFileName(this.allFiles, "file (1)(2).txt");
```

> Output - "file (1)(2) (1).txt"

[changelog]: CHANGELOG.md
