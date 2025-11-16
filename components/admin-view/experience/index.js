'use client';

import FormControls from '../form-controls';

const controls = [
  { name: 'position', placeholder: 'Position', type: 'text', label: 'Position' },
  { name: 'company', placeholder: 'Company', type: 'text', label: 'Company' },
  { name: 'duration', placeholder: 'Duration', type: 'text', label: 'Duration' },
  { name: 'location', placeholder: 'Location', type: 'text', label: 'Location' },
  { name: 'jobprofile', placeholder: 'Job Profile', type: 'text', label: 'Job Profile' },
];

export default function AdminExperienceView({
  formData,
  handleSaveData,
  setFormData,
  data,
}) {
  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {data && data.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-green-700">Experience Entries</h2>
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 border p-4 border-green-600 rounded"
              >
                <p><strong>Position:</strong> {item.position || '-'}</p>
                <p><strong>Company:</strong> {item.company || '-'}</p>
                <p><strong>Duration:</strong> {item.duration || '-'}</p>
                <p><strong>Location:</strong> {item.location || '-'}</p>
                <p><strong>Job Profile:</strong> {item.jobprofile || '-'}</p>
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
          onClick={() => handleSaveData('experience')}
          className="mt-4 border border-green-600 p-4 font-bold text-[16px] hover:bg-green-50 transition"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}