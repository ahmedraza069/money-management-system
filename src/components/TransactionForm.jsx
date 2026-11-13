const TransactionForm = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Title</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your title"
            />
            <label className="label">Amount</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your amount"
            />

            {/* Select Type */}
            <label className="label">Type</label>
            <select defaultValue="Pick a color" className="select">
              <option disabled={true}>Select a Type</option>
              <option>Income</option>
              <option>Expense</option>
            </select>

            {/* Select Category*/}
            <label className="label">Category</label>
            <select defaultValue="Pick a color" className="select">
              <option disabled={true}>Seclect a Category</option>
              <option>Salary</option>
              <option>Food</option>
            </select>
            {/* Date */}
            <label className="label">Date</label>
            <input type="date" className="input" />
            <button className="btn btn-neutral mt-4">Add</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
