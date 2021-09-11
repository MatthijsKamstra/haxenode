```
npm install body-parser express jade morgan serve-favicon
```

## tl;dr

```
# install
npm install dts2hx --save-dev
npm install express --save
npm install @types/express --save

# run dts2hx
npx dts2hx express

# install hxnodejs
haxelib install hxnodejs

# don't forget to add `--library express` to your build
```

## install packages

```
npm install dts2hx --save-dev
npm install express --save
npm install @types/express --save
```

## run dts2hx

```
// doesn't work because the express ts files are not in the repo
npx dts2hx express
```

works

```
npx dts2hx @types/express
```

## add lib

build.hxml

```
--library express
```

## install hxnodejs in .haxelib folder

```
haxelib install hxnodejs
```
