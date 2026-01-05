# Example of TypeScript Project with Subpath Imports

This branch changes vitest version from v2.0 to v4.0 in which the subpath imports is not respected.

Run `npm install && npm run test`, you will see error messages like:

```
Error: No known conditions for "#Source/utils.ts" specifier in "subpath-imports-typescript" package
  Plugin: vite:import-analysis
  File: D:/Sources/kongxiangyan-fork/subpath-imports-typescript/test/index.spec.ts:2:20
  1  |  import { expect, test } from "vitest";
  2  |  import { foo } from "#Source/utils.ts";
     |                       ^
  3  |  test("foo is 42", () => {
  4  |    expect(foo).toBe(42);
```

Change branch back to `main` in which the vitest version is v2.0, the error will be gone.