import { useState } from "react";

const Income_Categories = [
  "Salary",
  "Freelance",
  "Business",
  "Investments",
  "Gift",
  "Other",
];

const Expense_Categories = [
  "Food & Dining",
  "Rent & Housing",
  "Groceries",
  "Utilities",
  "Transportation",
  "Entertainment",
  "Shopping",
  "Healthcare",
  "Other",
];

const TransactionForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState(Income_Categories[0]);
  const [date, setDate] = useState("");

  const currentCategory =
    type === "income" ? Income_Categories : Expense_Categories;

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setType(newType);
    setCategory(
      newType === "income" ? Income_Categories[0] : Expense_Categories[0]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload bondho

    const formData = {
      title,
      amount: Number(amount),
      type,
      category,
      date,
    };

    console.log("Form Data:", formData);

    // Reset form
    setTitle("");
    setAmount("");
    setType("income");
    setCategory(Income_Categories[0]);
    setDate("");
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <label className="label">Title</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label className="label">Amount</label>
            <input
              type="number"
              min="1"
              className="input"
              placeholder="Enter your amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            <label className="label">Type</label>
            <select
              value={type}
              onChange={handleTypeChange}
              className="select"
              required
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <label className="label">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select"
              required
            >
              {currentCategory.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <label className="label">Date</label>
            <input
              type="date"
              className="input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Add
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;