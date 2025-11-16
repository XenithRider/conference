'use client';

export default function AdminContactView({ data }) {
  return (
    <div className="flex flex-col gap-5">
      {data && data.length > 0 ? (
        <>
          <h2 className="text-xl font-bold text-green-700">Contact Messages</h2>
          {data.map((item, index) => (
            <div
              key={index}
              className="p-5 border border-green-600 rounded shadow-sm bg-white"
            >
              <p><strong>Name:</strong> {item.name || '-'}</p>
              <p><strong>Email:</strong> {item.email || '-'}</p>
              <p><strong>Message:</strong> {item.message || '-'}</p>
            </div>
          ))}
        </>
      ) : (
        <p className="text-gray-500">No contact messages available.</p>
      )}
    </div>
  );
}