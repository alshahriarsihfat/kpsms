import EmployeeForm from "@/components/forms/employee-form";

export default function NewEmployeePage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Add New Employee
        </h1>

        <p className="mt-2 text-gray-500">
          Register a new employee in Khan Pharmacy.
        </p>
      </div>

      <EmployeeForm />
    </main>
  );
}