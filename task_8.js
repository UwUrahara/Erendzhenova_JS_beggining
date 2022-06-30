let mapForPrint = new Map();
mapForPrint.set("Num", 123);
mapForPrint.set("Bool", true);
mapForPrint.set(1, "one");
mapForPrint.set("Str", "Hello");

function printMap() {
  mapForPrint.forEach((value, key) => {
     console.log(`Ключ — ${key}, значение — ${value}`);
  });
}

printMap();