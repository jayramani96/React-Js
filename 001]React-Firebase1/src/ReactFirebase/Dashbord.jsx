export default function Dashboard() {
  return (
    <div
      className=""
      style={{ backgroundColor: '#121212', color: '#E0E0E0', minHeight: '100vh', padding: '20px' }}
    >
      <div className="text-center mb-4">
        {userData ? (
          <div>
            <h1 className="text-primary" style={{ color: '#00BCD4' }}>Welcome to Dashboard</h1>
            <img
              width={60}
              height={60}
              src={userData?.imgUrl ? userData.imgUrl : "/user.jpg"}
              alt="User Avatar"
              style={{
                borderRadius: '50%',
                border: '3px solid #00BCD4',
                margin: '15px',
                boxShadow: '0 4px 8px rgba(0, 188, 212, 0.3)',
              }}
            />
            <h2 className="text-light" style={{ color: '#BB86FC' }}>{userData.name}</h2>
            <h2 className="text-light" style={{ color: '#FFB74D' }}>{userData.email}</h2>
            <h2 className="text-light" style={{ color: '#81C784' }}>{userData.age}</h2>
            <h2 className="text-light" style={{ color: '#FF8A65' }}>{userData.city}</h2>
          </div>
        ) : (
          <div>
            <GridLoader color="#00BCD4" />
          </div>
        )}
      </div>

      <div
        className="card shadow-sm p-4 mb-5"
        style={{
          backgroundColor: '#1F1B24',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
        }}
      >
        <h4 className="text-primary text-center mb-3" style={{ color: '#00BCD4' }}>Add New Record</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                backgroundColor: '#2C2C34',
                color: '#FFFFFF',
                border: '1px solid #6C63FF',
                borderRadius: '8px',
              }}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Subject"
              value={sub}
              onChange={(e) => setSub(e.target.value)}
              style={{
                backgroundColor: '#2C2C34',
                color: '#FFFFFF',
                border: '1px solid #6C63FF',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <button
            className="btn"
            onClick={handleSubmit}
            style={{
              backgroundColor: editIndex ? '#FF7043' : '#4CAF50',
              color: '#FFFFFF',
              fontWeight: 'bold',
              fontSize: '16px',
              padding: '10px',
              borderRadius: '8px',
            }}
          >
            {editIndex ? 'Update' : 'Add Data'}
          </button>
        </div>
      </div>

      <div
        className="card shadow-sm p-4"
        style={{
          backgroundColor: '#1F1B24',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
        }}
      >
        <h4 className="text-primary text-center mb-3" style={{ color: '#00BCD4' }}>User Detail</h4>
        {record ? (
          <ul
            className="list-group"
            style={{
              backgroundColor: '#1F1B24',
              border: 'none',
            }}
          >
            {record.map((e, i) => (
              <li
                key={i}
                className="list-group-item"
                style={{
                  backgroundColor: '#2C2C34',
                  color: '#E0E0E0',
                  border: '1px solid #6C63FF',
                  marginBottom: '10px',
                  borderRadius: '8px',
                }}
              >
                <strong>User ID:</strong> {e.userId} <br />
                <strong>Name:</strong> {e.name} <br />
                <strong>Subject:</strong> {e.sub} <br />
                <strong>Doc ID:</strong> {e.docId}
                <div className="mt-2">
                  <button
                    onClick={() => handleDelete(e.docId)}
                    className="btn btn-danger me-2"
                    style={{
                      padding: '5px 10px',
                      borderRadius: '5px',
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(e.docId)}
                    className="btn btn-success"
                    style={{
                      padding: '5px 10px',
                      borderRadius: '5px',
                    }}
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted text-center" style={{ color: '#9E9E9E' }}>No records found.</p>
        )}
      </div>
    </div>
  );
}
