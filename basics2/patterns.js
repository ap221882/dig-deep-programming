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
