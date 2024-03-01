import PolicyStatement from 'app/components/PolicyBuilder/PolicyStatement'

export default function PolicyBuilder() {
  return (
    <div className="text-center">
      <p className="mt-1 text-sm text-gray-500">Add Statements and Actions to the Policy.</p>
      <div className="mt-6">
        <PolicyStatement />
      </div>
      <div>
        <button type="button" className="bg-cyan-200">
          Next
        </button>
      </div>
    </div>
  )
}
