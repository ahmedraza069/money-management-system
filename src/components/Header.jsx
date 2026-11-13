
const Header = () => {
  return (
    <div className="py-10 px-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Money Management System</h1>
        <p className="mt-2 text-gray-500">Track your daily income & expense</p>
      </div>
      {/* Total income and expense */}
      <div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-medium">Total Income</h2>
            <p className="text-2xl font-bold text-green-500">$1,200.00</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <h2 className="text-lg font-medium">Total Expense</h2>
            <p className="text-2xl font-bold text-red-500">$800.00</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <h2 className="text-lg font-medium">Total Balance</h2>
            <p className="text-2xl font-bold text-red-500">$800.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
