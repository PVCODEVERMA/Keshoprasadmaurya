
import UserProfileSection from "./UserProfileSection";

export default function UserAddressCard() {
  return (
    <UserProfileSection
      title="Address"
      modalTitle="Edit Address"
      modalDescription="Update your address information."
      modalContent={
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
          <div>
            <Label>Country</Label>
            <Input type="text" value="United States" />
          </div>
          {/* Other address fields */}
        </div>
      }
    >
      <div>
        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
          Country
        </p>
        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
          United States
        </p>
      </div>
      {/* Other address info */}
    </UserProfileSection>
  );
}