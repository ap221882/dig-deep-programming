// Pattern1
const process = require("process");

let n = 10;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}

// Pattern2
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}

// Pattern3
for (let i = 0; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write(j + 1 + " ");
  }
  console.log("");
}

// Pattern4
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(i + 1 + " ");
  }
  console.log("");
}

// Pattern5
for (let i = 0; i < n; i++) {
  for (let j = n; j > i; j--) {
    process.stdout.write(i + 1 + " ");
  }
  console.log("");
}

// Pattern6
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(`${j} `);
  }
  console.log("");
}

// Pattern7
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(` `);
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write(`${"*"}`);
  }
  console.log("");
}

console.log("");
/**
 * * * * * * * * * * * * * * * * * * * * * *
 */
// Pattern8
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write("*");
  }
  console.log("");
}

// Pattern9
for (let i = 0; i < n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write("*");
  }
  console.log("");
}

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write("*");
  }
  console.log("");
}

// Pattern 10
console.log("Pattern 10");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("*");
  }
  console.log("");
}

// Pattern 11
console.log("Pattern 11");
for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    k = "1";
  } else {
    k = "0";
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(k);
    if (k == "1") {
      k = "0";
    } else if (k == "0") {
      k = "1";
    }
  }
  console.log("");
}

// Pattern 13
let k = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String(k));
    k = k + 1;
  }
}
