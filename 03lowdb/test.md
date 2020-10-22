## install packages

```
npm install dts2hx --save-dev
npm install lowdb -s
npm install @types/lowdb -s
```

## run dts2hx

```
// doesn't work because the lowdb ts files are not in the repo
npx dts2hx lowdb
```

works

```
npx dts2hx @types/lowdb
```

## add lib

build.hxml

```
--library lowdb
```

## install hxnodejs in .haxelib folder

```
haxelib install hxnodejs
```
