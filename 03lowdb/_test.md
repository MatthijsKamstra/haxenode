## tl;dr

```
# install
npm install dts2hx --save-dev
npm install lowdb
npm install @types/lowdb

# run dts2hx
npx dts2hx @types/lowdb

# install hxnodejs
haxelib install hxnodejs

# don't forget to add `--library lowdb` to your build
```

Convert specific adapters

```
npx dts2hx @types/lowdb/adapters/FileSync.d.ts
```

## install packages

```
npm install dts2hx --save-dev
npm install lowdb --save
npm install @types/lowdb --save
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
