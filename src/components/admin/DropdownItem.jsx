export default function DropdownItem({ children }) {
    return (
      <div className="border-b dark:border-gray-700 last:border-0">
        {children}
      </div>
    );
  }