## tl;dr

```
# install
npm install dts2hx --save-dev
npm install nedb --save
npm install @types/nedb --save

# run dts2hx
npx dts2hx nedb

# install hxnodejs
haxelib install hxnodejs

# don't forget to add `--library nedb` to your build
```

## install packages

```
npm install dts2hx --save-dev
npm install nedb --save
npm install @types/nedb --save
```

## run dts2hx

```
// doesn't work because the nedb ts files are not in the repo
npx dts2hx nedb
```

works

```
npx dts2hx @types/nedb
```

## add lib

build.hxml

```
--library nedb
```

## install hxnodejs in .haxelib folder

```bash
haxelib install hxnodejs
```
