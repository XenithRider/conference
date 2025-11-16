'use client';

import FormControls from '../form-controls';

const controls = [
  { name: 'degree', placeholder: 'Degree Name', type: 'text', label: 'Enter Degree Name' },
  { name: 'year', placeholder: 'Year', type: 'text', label: 'Year' },
  { name: 'college', placeholder: 'College Name', type: 'text', label: 'Enter College Name' },
];

export default function AdminEducationView({ handleSaveData, formData, setFormData, data }) {
  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {data && data.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-green-700">Education Entries</h2>
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 border p-4 border-green-600 rounded"
              >
                <p><strong>Degree:</strong> {item.degree || '-'}</p>
                <p><strong>College:</strong> {item.college || '-'}</p>
                <p><strong>Year:</strong> {item.year || '-'}</p>
              </div>
            ))}
          </div>
        )}

        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        <button
          onClick={() => handleSaveData('education')}
          className="mt-4 border border-green-600 p-4 font-bold text-[16px] hover:bg-green-50 transition"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}