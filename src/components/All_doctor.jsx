const doctors = [
  {
    id: 1,
    name: "Dr. Krishnakumar",
    time: "9:00 AM - 1:00 PM",
    days: "Monday, Wednesday, Friday"
  },
  {
    id: 2,
    name: "Dr. Meera",
    time: "2:00 PM - 6:00 PM",
    days: "Tuesday, Thursday"
  },
  {
    id: 3,
    name: "Dr. Rahul",
    time: "10:00 AM - 4:00 PM",
    days: "Monday - Saturday"
  },
  {
    id: 4,
    name: "Dr. Abhijith",
    time: "10:00 AM - 4:00 PM",
    days: "Monday - Saturday"
  },
  {
    id: 5,
    name: "Dr. Preeti",
    time: "10:00 AM - 1:00 PM",
    days: "Monday - Saturday"
  }
];

function AllDoctors() {
  return (
    <div style={styles.container}>
      <div className="glass-card" style={styles.card}>
        <h2 style={styles.title}>All Doctors</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>Doctor Name</th>
                <th style={styles.th}>Visiting Time</th>
                <th style={styles.th}>Available Days</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc, index) => (
                <tr key={doc.id} style={index % 2 === 0 ? {} : styles.alternateRow}>
                  <td style={styles.td}>{doc.name}</td>
                  <td style={styles.td}>{doc.time}</td>
                  <td style={styles.td}>{doc.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    maxWidth: "900px",
    padding: "40px",
  },
  title: {
    fontSize: "2rem",
    color: "#1e293b",
    marginBottom: "30px",
    textAlign: "center",
  },
  tableContainer: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0",
    borderRadius: "8px",
    overflow: "hidden",
  },
  headerRow: {
    backgroundColor: "rgba(91, 108, 255, 0.1)",
  },
  th: {
    padding: "16px",
    textAlign: "left",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#5b6cff",
    borderBottom: "2px solid rgba(91, 108, 255, 0.2)",
  },
  td: {
    padding: "16px",
    fontSize: "0.95rem",
    color: "#475569",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
  },
  alternateRow: {
    backgroundColor: "rgba(0, 0, 0, 0.02)",
  },
};

export default AllDoctors;
