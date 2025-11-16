'use client';

import FormControls from '../form-controls';

const controls = [
  { name: 'name', placeholder: 'Project Name', type: 'text', label: 'Project Name' },
  { name: 'technologies', placeholder: 'Enter Technologies', type: 'text', label: 'Enter Technologies' },
  { name: 'website', placeholder: 'Website', type: 'text', label: 'Website' },
  { name: 'github', placeholder: 'Github', type: 'text', label: 'Github' },
];

export default function AdminProjectView({ formData, setFormData, handleSaveData, data }) {
  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {data && data.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-green-700">Saved Projects</h2>
            {data.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 border p-4 border-green-600 rounded">
                <p><strong>Name:</strong> {item.name || '-'}</p>
                <p><strong>Technologies:</strong> {item.technologies || '-'}</p>
                <p><strong>Website:</strong> {item.website || '-'}</p>
                <p><strong>Github:</strong> {item.github || '-'}</p>
              </div>
            ))}
          </div>
        )}

        <FormControls controls={controls} formData={formData} setFormData={setFormData} />

        <button
          onClick={() => handleSaveData('project')}
          className="mt-4 border border-green-600 p-4 font-bold text-[16px] hover:bg-green-50 transition"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}