## tl;dr

```bash
# install
npm install dts2hx --save-dev
# npm install lowdb --save
npm install @types/lowdb --save

npm install

# run dts2hx
npx dts2hx lowdb

# install hxnodejs
haxelib install hxnodejs

# don't forget to add `--library lowdb` to your build
```

## install packages

```bash
npm install dts2hx --save-dev
npm install lowdb --save
npm install @types/lowdb --save
```

## run dts2hx

```bash
// doesn't work because the lowdb ts files are not in the repo
npx dts2hx lowdb
```

works

```bash
npx dts2hx @types/lowdb
```

## add lib

build.hxml

```bash
--library lowdb
```

## install hxnodejs in .haxelib folder

```bash
haxelib install hxnodejs
```
