// Task 1
const product = {
  id: 2,
  name: "Gaming Pad",
  price: 3000000000000,
  category: "Electronics",
  inStock: false
};

function formatProduct({ name, price, inStock }) {
  return `${name} — NGN${price.toLocaleString()} (${inStock ? "In Stock" : "Out of Stock"})`;
}
console.log(formatProduct(product));



// TASK 2.1
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 12000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    price: 25000,
    category: "Electronics",
    inStock: false,
  },
  {
    id: 3,
    name: "USB Flash Drive",
    price: 8000,
    category: "Storage",
    inStock: true,
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 15000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 30000,
    category: "Electronics",
    inStock: false,
  },
  {
    id: 6,
    name: "External Hard Drive",
    price: 55000,
    category: "Storage",
    inStock: true,
  },
];

// TASK2.2
function getInStockProducts(products) {
  return products.filter((product) => product.inStock === true);
}
function getProductNames(products) {
  return products.map((product) => product.name);
}
function findProductById(products, id) {
  return products.find((product) => product.id === id);
}
function getTotalCatalogValue(products) {
  return products.reduce((total, product) => total + product.price, 0);
}
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }

    groups[product.category].push(product);

    return groups;
  }, {});
}
console.log("In Stock Products:", getInStockProducts(products));
console.log("Product Names:", getProductNames(products));
console.log("Find Product:", findProductById(products, 3));
console.log("Total Catalog Value:", getTotalCatalogValue(products));
console.log("Products Grouped By Category:", groupByCategory(products));





// TASK 4
const students = [
  {
    id: 1,
    name: "Ayo",
    score: 85,
    subject: "Mathematics"
  },
  {
    id: 2,
    name: "Ayoola",
    score: 72,
    subject: "English"
  },
  {
    id: 3,
    name: "Mahmud",
    score: 92,
    subject: "JavaScript"
  },
  {
    id: 4,
    name: "Loner",
    score: 65,
    subject: "Physics"
  },
  {
    id: 5,
    name: "Ope",
    score: 48,
    subject: "Chemistry"
  },
  {
    id: 6,
    name: "Zaynab",
    score: 78,
    subject: "Statistics"
  }
];
function getPassingStudents(students, passMark) {
  return students.filter(student => student.score >= passMark);
}
function getAverageScore(students) {
  const total = students.reduce((sum, student) => {
    return sum + student.score;
  }, 0);

  return total / students.length;
}
function getTopStudent(students) {
  return students.reduce((top, student) => {
    return student.score > top.score ? student : top;
  });
}
function assignGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
  } else {
    return "F";
  }
}
const gradedStudents = students.map(student => {
  return {
    ...student,
    grade: assignGrade(student.score)
  };
});
console.log("Passing Students:", getPassingStudents(students, 50));
console.log("Average Score:", getAverageScore(students));
console.log("Top Student:", getTopStudent(students));
console.log("Graded Students:", gradedStudents);
console.log("Original Students:", students);






// TASK 5
const transactions = [
  { id: 1, type: "credit", amount: 50000, date: "2026-01-05" },
  { id: 2, type: "debit", amount: 12000, date: "2026-01-10" },
  { id: 3, type: "credit", amount: 30000, date: "2026-01-15" },
  { id: 4, type: "debit", amount: 8000, date: "2026-02-03" },
  { id: 5, type: "credit", amount: 75000, date: "2026-02-12" },
  { id: 6, type: "debit", amount: 25000, date: "2026-02-20" },
  { id: 7, type: "credit", amount: 40000, date: "2026-03-02" },
  { id: 8, type: "debit", amount: 15000, date: "2026-03-08" },
  { id: 9, type: "credit", amount: 60000, date: "2026-03-18" },
  { id: 10, type: "debit", amount: 10000, date: "2026-03-25" }
];
function getBalance(transactions) {
  return transactions.reduce((balance, transaction) => {
    if (transaction.type === "credit") {
      return balance + transaction.amount;
    } else {
      return balance - transaction.amount;
    }
  }, 0);
}
function getTransactionsByType(transactions, type) {
  return transactions.filter(transaction => transaction.type === type);
}
function getLargestTransaction(transactions) {
  return transactions.reduce((largest, transaction) => {
    return transaction.amount > largest.amount ? transaction : largest;
  });
}
function getMonthlyTotals(transactions) {
  return transactions.reduce((totals, transaction) => {
    const month = transaction.date.slice(0, 7);

    if (!totals[month]) {
      totals[month] = 0;
    }

    totals[month] += transaction.amount;

    return totals;
  }, {});
}
console.log("Account Balance:", getBalance(transactions));
console.log("Credit Transactions:", getTransactionsByType(transactions, "credit"));
console.log("Debit Transactions:", getTransactionsByType(transactions, "debit"));
console.log("Largest Transaction:", getLargestTransaction(transactions));
console.log("Monthly Totals:", getMonthlyTotals(transactions));