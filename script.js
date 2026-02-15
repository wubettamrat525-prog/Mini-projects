function checkBudget() {
    let budget = Number(prompt("Enter your budget amount:"));
    let price = Number(prompt("Enter item price:"));
    let savings = Number(prompt("Enter your savings (optional):")) || 0;

    let totalMoney = budget + savings;

    if (totalMoney >= price) {
        alert("✅ You can afford this item!");
    } else {
        alert("❌ You cannot afford this item.");
    }

    console.log("Budget:", budget);
    console.log("Price:", price);
    console.log("Savings:", savings);
}
